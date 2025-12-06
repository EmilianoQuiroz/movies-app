import HorizontalSlides from "@/presentation/components/movies/HorizontalSlides";
import MainSlidesShow from "@/presentation/components/movies/MainSlidesShow";
import { useMovies } from "@/presentation/hooks/useMovies";
import React from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  //Safe aerea
  const safeArea = useSafeAreaInsets();
  //Utilizamos el hook useMovies para obtener los datos de películas
  const {
    nowPlayingQuery,
    popularMoviesQuery,
    comingSoonMoviesQuery,
    topRatedMoviesQuery,
  } = useMovies();

  // Pantalla de carga mientras se obtienen los datos
  if (nowPlayingQuery.isLoading) {
    return (
      <View className="items-center justify-center flex-1">
        <ActivityIndicator color="purple" size={40} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View className="pb-10 mt-2" style={{ marginTop: safeArea.top }}>
        {/* Renderizamos la lista de películas u otro contenido aquí */}
        <Text className="px-4 mb-2 text-3xl font-bold">Movies App</Text>
        {/* Carrousel de imagenes */}
        <MainSlidesShow movies={nowPlayingQuery.data ?? []} />
        <HorizontalSlides
          title="Popular"
          movies={popularMoviesQuery.data ?? []}
        />
        {/** Top Rated */}
        <HorizontalSlides
          title="Top Rated"
          movies={topRatedMoviesQuery.data ?? []}
        />
        {/** Coming soon */}
        <HorizontalSlides
          title="Coming Soon"
          movies={comingSoonMoviesQuery.data ?? []}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
