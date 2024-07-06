import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Dimensions,
} from "react-native";
import { Movie } from "../types/app";
import MovieItem from "../components/movies/MovieItem";
import { API_ACCESS_TOKEN } from "@env";

const win = Dimensions.get("window");
export default function Genre({ route }: any): JSX.Element {
  const { id, name } = route.params;
  const [movies, setMovies] = useState<Movie[]>([]);

  const getMovieByGenre = (): void => {
    const url = `https://api.themoviedb.org/3/discover/movie?with_genres=${id}`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_ACCESS_TOKEN}`,
      },
    };

    fetch(url, options)
      .then(async (response) => await response.json())
      .then((response) => {
        setMovies(response.results);
      })
      .catch((errorResponse) => {
        console.log(errorResponse);
      });
  };

  useEffect(() => {
    getMovieByGenre();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 20 }}>
        Result of {name} Genre
      </Text>
      <FlatList
        style={{ marginTop: 20 }}
        data={movies}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 10 }}>
            <MovieItem
              movie={item}
              size={{
                width: 100,
                height: 160,
              }}
              coverType={"poster"}
            />
          </View>
        )}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: win.width,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
