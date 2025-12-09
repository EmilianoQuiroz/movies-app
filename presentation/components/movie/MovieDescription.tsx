import { Formatter } from "@/config/helpers/formatter";
import { CompleteMovie } from "@/infrastructure/interfaces/movie.interface";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import GenresPills from "./GenresPills";

interface Props {
  movie: CompleteMovie;
}

export default function MovieDescription({ movie }: Props) {
  return (
    <View style={{ marginHorizontal: 20, marginTop: 10 }}>
      <View style={{ flexDirection: "column", alignItems: "flex-start" }}>
        <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
          {movie.rating} <Ionicons name="star" size={16} color="orange" />
        </Text>
        <GenresPills movie={movie} />
      </View>
      <Text style={{ marginTop: 10, fontWeight: "bold" }}>Sinapsis</Text>
      <Text style={{ marginTop: 8, fontWeight: "normal" }}>
        {movie.description}
      </Text>
      <Text style={{ marginTop: 10, fontWeight: "bold" }}>Budget</Text>
      <Text style={{ marginTop: 8, fontWeight: "normal" }}>
        {Formatter.currency(movie.budget)}
      </Text>
    </View>
  );
}
