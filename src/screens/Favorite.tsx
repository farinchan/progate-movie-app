import React, { useState, useCallback } from "react";
import { View, Text, StyleSheet, FlatList, Dimensions } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MovieItem from "../components/movies/MovieItem";
import { Movie } from "../types/app";
import { useFocusEffect } from "@react-navigation/native";

const { width } = Dimensions.get("window");
const ITEM_WIDTH = width / 3 - 16;

const Favorite = (): JSX.Element => {
  const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>([]);

  const fetchFavoriteMovies = async (): Promise<void> => {
    try {
      const storedFavorites: string | null = await AsyncStorage.getItem(
        "@FavoriteList"
      );
      if (storedFavorites) {
        setFavoriteMovies(JSON.parse(storedFavorites));
      }
    } catch (error) {
      console.log("Error fetching favorite movies:", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchFavoriteMovies();
    }, [])
  );

  if (favoriteMovies.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No favorite movies found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorite Movies</Text>
      <FlatList
        data={favoriteMovies}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <MovieItem
              movie={item}
              size={{ width: ITEM_WIDTH, height: 160 }}
              coverType="poster"
            />
          </View>
        )}
        keyExtractor={(item) => `${item.id}`}
        numColumns={3}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 16,
  },
  list: {
    paddingHorizontal: 8,
  },
  itemContainer: {
    width: ITEM_WIDTH,
    margin: 5.5,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 18,
    color: "#999",
  },
});

export default Favorite;
