import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import type { MovieListProps, Movie } from "../../types/app";
import { API_ACCESS_TOKEN } from "@env";
import MovieItem from "./MovieItem";

const coverImageSize = {
  backdrop: {
    width: 280,
    height: 160,
  },
  poster: {
    width: 100,
    height: 160,
  },
};

const MovieList = ({ title, path, coverType }: MovieListProps): JSX.Element => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getMovieList();
  }, []);

  const getMovieList = (): void => {
    const url = `https://api.themoviedb.org/3/${path}`;
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
    <View>
      <View style={styles.header}>
        <View style={styles.purpleLabel}></View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <FlatList
        style={{
          ...styles.movieList,
          maxHeight: coverImageSize[coverType].height,
        }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={movies}
        renderItem={({ item }) => (
          <MovieItem
            movie={item}
            size={coverImageSize[coverType]}
            coverType={coverType}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default MovieList;

const styles = StyleSheet.create({
  header: {
    marginLeft: 6,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  purpleLabel: {
    width: 20,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#8978A4",
    marginRight: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "900",
  },
  movieList: {
    paddingLeft: 4,
    marginTop: 8,
  },
});
