export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  genres_id?: number[];
  vote_average: number;
  overview: string;
}