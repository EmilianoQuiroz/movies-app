import { comingSoonMoviesAction } from "@/core/actions/movies/coming-soon-movies.action";
import { nowPlayingAction } from "@/core/actions/movies/now-playing.action";
import { popularMoviesAction } from "@/core/actions/movies/popular-movies.action";
import { topRatedMoviesAction } from "@/core/actions/movies/top-rated-movies.action";
import { useQuery } from "@tanstack/react-query";

export const useMovies = () => {
  // Aquí iría la lógica para obtener y manejar los datos de películas
  // Queries
  const nowPlayingQuery = useQuery({
    queryKey: ["movies", "nowPlaying"],
    queryFn: () => nowPlayingAction(),
    staleTime: 1000 * 60 * 60 * 24, // 24 horas
  });
  const popularMoviesQuery = useQuery({
    queryKey: ["movies", "popular"],
    queryFn: () => popularMoviesAction(),
    staleTime: 1000 * 60 * 60 * 24, // 24 horas
  });
  const comingSoonMoviesQuery = useQuery({
    queryKey: ["movies", "comingSoon"],
    queryFn: () => comingSoonMoviesAction(),
    staleTime: 1000 * 60 * 60 * 24, // 24 horas
  });
  const topRatedMoviesQuery = useQuery({
    queryKey: ["movies", "topRated"],
    queryFn: () => topRatedMoviesAction(),
    staleTime: 1000 * 60 * 60 * 24, // 24 horas
  });

  return {
    nowPlayingQuery,
    popularMoviesQuery,
    comingSoonMoviesQuery,
    topRatedMoviesQuery,
  };
};
