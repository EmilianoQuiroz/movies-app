import { CompleteMovie } from "@/infrastructure/interfaces/movie.interface";
import React from "react";
import { Text, View } from "react-native";

interface Props {
  movie: CompleteMovie;
}

export default function GenresPills({ movie }: Props) {
  return (
    <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
      {movie.genres.map((genre, index) => (
        <View
          key={`${genre}-${index}`}
          style={{
            backgroundColor: "#2DE31C",
            borderColor: "#25BA17",
            borderWidth: 1,
            paddingHorizontal: 8,
            paddingVertical: 4,
            borderRadius: 12,
          }}
        >
          <Text style={{ color: "white" }}>{genre}</Text>
        </View>
      ))}
    </View>
  );
}
