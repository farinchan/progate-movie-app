import React, { useState } from "react";
import {
  View,
  TextInput,
  FlatList,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Movie } from "../../types/app";
import MovieItem from "../movies/MovieItem";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { API_ACCESS_TOKEN } from "@env";

const win = Dimensions.get("window");

export default function KeywordSearch() {
  const [keyword, setKeyword] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);

  const getMovieDetail = (): void => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${keyword}`;
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

  return (
    <SafeAreaView style={{ alignItems: "center" }}>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => {
            setKeyword(text);
          }}
          value={keyword}
          placeholder="Search movies..."
        />
        <TouchableOpacity onPress={getMovieDetail} style={styles.iconWrapper}>
          <Ionicons name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <FlatList
        style={{
          marginTop: 20,
          marginBottom: 420,
          width: win.width,
        }}
        contentContainerStyle={{
          alignItems: "center",
        }}
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
  inputWrapper: {
    width: "100%",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 8,
    marginVertical: 10,
  },
  textInput: {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 999,
    width: "100%",
  },
  iconWrapper: {
    position: "absolute",
    left: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
