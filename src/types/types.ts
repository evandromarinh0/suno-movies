export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  genres?: Array<{
    id: number;
    name: string;
  }>;
  vote_average: number;
  overview: string;
}

export interface SearchedMovie {
  id: number;
  poster_path: string;
  title: string;
  genre_ids?: Array<number>;
  vote_average: string;
}