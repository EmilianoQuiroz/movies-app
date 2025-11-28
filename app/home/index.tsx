import { useMovies } from "@/presentation/hooks/useMovies";
import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  //Safe aerea
  const safeArea = useSafeAreaInsets();
  //Utilizamos el hook useMovies para obtener los datos de películas
  const { nowPlayingQuery } = useMovies();

  // Pantalla de carga mientras se obtienen los datos
  if (nowPlayingQuery.isLoading) {
    return (
      <View className="items-center justify-center flex-1">
        <ActivityIndicator color="purple" size={40} />
      </View>
    );
  }

  return (
    <View className="mt-2" style={{ marginTop: safeArea.top }}>
      {/* Renderizamos la lista de películas u otro contenido aquí */}
      <Text className="px-4 mb-2 text-3xl font-bold">Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
