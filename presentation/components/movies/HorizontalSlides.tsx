import { Movie } from "@/infrastructure/interfaces/movie.interface";
import React from "react";
import { FlatList, Text, View } from "react-native";
import MoviePoster from "./MoviePoster";

interface Props {
  title?: string;
  movies?: Movie[];
}

const HorizontalSlides = ({ title, movies }: Props) => {
  return (
    <View>
      {title && <Text className="px-4 text-3xl">{title}</Text>}
      <FlatList
        contentContainerStyle={{ paddingHorizontal: 10 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={movies}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} poster={item.poster} smallPoster />
        )}
      />
    </View>
  );
};

export default HorizontalSlides;
