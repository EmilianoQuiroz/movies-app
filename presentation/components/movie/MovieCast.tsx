import { Cast } from "@/infrastructure/interfaces/cast";
import React from "react";
import { Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { ActorCard } from "./ActorCard";

interface Props {
  cast: Cast[];
}

export default function MovieCast({ cast }: Props) {
  return (
    <View>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: 20,
          marginTop: 20,
        }}
      >
        Cast
      </Text>
      <FlatList
        data={cast}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <ActorCard actor={item} />}
      />
    </View>
  );
}
