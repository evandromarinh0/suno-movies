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