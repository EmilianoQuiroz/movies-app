import { View, Text } from "react-native";
import React from "react";
import { useMovies } from "@/presentation/hooks/useMovies";

const HomeScreen = () => {
  //Utilizamos el hook useMovies para obtener los datos de películas
  const { nowPlayingQuery } = useMovies();
  return (
    <View>
      <Text>{JSON.stringify(nowPlayingQuery.data)}</Text>
    </View>
  );
};

export default HomeScreen;
