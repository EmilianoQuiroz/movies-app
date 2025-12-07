import { comingSoonMoviesAction } from "@/core/actions/movies/coming-soon-movies.action";
import { nowPlayingAction } from "@/core/actions/movies/now-playing.action";
import { popularMoviesAction } from "@/core/actions/movies/popular-movies.action";
import { topRatedMoviesAction } from "@/core/actions/movies/top-rated-movies.action";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export const useMovies = () => {
  // Aquí iría la lógica para obtener y manejar los datos de películas
  // Queries
  const nowPlayingQuery = useQuery({
    queryKey: ["movies", "nowPlaying"],
    queryFn: () => nowPlayingAction(),
    staleTime: 1000 * 60 * 60 * 24, // 24 horas
  });
  const popularMoviesQuery = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ["movies", "popular"],
    queryFn: ({ pageParam }) => {
      return popularMoviesAction({ page: pageParam });
    },
    staleTime: 1000 * 60 * 60 * 24, // 24 horas
    getNextPageParam: (lastPage, pages) => pages.length + 1,
  });
  const comingSoonMoviesQuery = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ["movies", "comingSoon"],
    queryFn: ({ pageParam }) => {
      return comingSoonMoviesAction({ page: pageParam });
    },
    staleTime: 1000 * 60 * 60 * 24, // 24 horas
    getNextPageParam: (lastPage, pages) => pages.length + 1,
  });
  const topRatedMoviesQuery = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ["movies", "topRated"],
    queryFn: ({ pageParam }) => {
      return topRatedMoviesAction({ page: pageParam });
    },
    staleTime: 1000 * 60 * 60 * 24, // 24 horas
    getNextPageParam: (lastPage, pages) => pages.length + 1,
  });

  return {
    nowPlayingQuery,
    popularMoviesQuery,
    comingSoonMoviesQuery,
    topRatedMoviesQuery,
  };
};
