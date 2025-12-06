import { movieApi } from "@/core/api/movie-api";
import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

export const topRatedMoviesAction = async () => {
  try {
    const { data } = await movieApi.get<MovieDBMoviesResponse>("/top_rated");
    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);
    console.log(movies);
    return movies;
  } catch (error) {
    console.log(error);
    throw "Error fetching popular movies";
  }
};
