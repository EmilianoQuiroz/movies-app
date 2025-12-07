import { Movie } from "@/infrastructure/interfaces/movie.interface";
import React, { useEffect, useRef } from "react";
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  View,
} from "react-native";
import MoviePoster from "./MoviePoster";

interface Props {
  title?: string;
  movies?: Movie[];
  loadNextPage?: () => void;
}

const HorizontalSlides = ({ title, movies, loadNextPage }: Props) => {
  const isLoading = useRef(false);

  useEffect(() => {
    setTimeout(() => {
      isLoading.current = false;
    }, 200);
  }, [movies]);
  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    // Aquí puedes manejar eventos de desplazamiento si es necesario
    if (isLoading.current) return;
    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;
    const isEndClosed =
      contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;
    if (!isEndClosed) return;
    isLoading.current = true;
    console.log("Cargando más películas...");
    loadNextPage && loadNextPage();
  };
  return (
    <View>
      {title && <Text className="px-4 text-3xl">{title}</Text>}
      <FlatList
        contentContainerStyle={{ paddingHorizontal: 10 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={movies}
        keyExtractor={(item, i) => `${item.id}*-${i}`}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} poster={item.poster} smallPoster />
        )}
        onScroll={onScroll}
      />
    </View>
  );
};

export default HorizontalSlides;
