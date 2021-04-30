import { useEffect } from "react";
import { createContext, ReactNode, useState } from "react";
import api from "../services/api";
import { Movie, SearchedMovie } from "../types/types";

interface MovieContextData {
  movies: Movie[];
  hotMovies: Movie[];
  searchValue: string;
  setSearchValue: any;
  searchedMovies: SearchedMovie | undefined;
}

interface MovieProviderProps {
  children: ReactNode;
}

export const MovieContext = createContext({} as MovieContextData);

export function MovieProvider({ children }: MovieProviderProps) {
  const [movies, setMovies] = useState([]);
  const [hotMovies, setHotMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [searchedMovies, setSearchedMovies] = useState<SearchedMovie | undefined>();

  useEffect(() => {
    async function getHotMovies(): Promise<void> {
      const { data } = await api.get('/discover/movie?api_key=36f9a2444accd8393aa91ed7c931f797');
      setHotMovies(data.results);
    }
    getHotMovies();
  }, []);

  useEffect(() => {
    async function getMovies(): Promise<void> {
      const { data } = await api.get('/discover/movie?api_key=36f9a2444accd8393aa91ed7c931f797');
      setMovies(data.results)
    }
    getMovies();
  }, []);

  useEffect(() => {
    async function searchMovie(): Promise<void> {
      const { data } = await api.get(`/search/movie?api_key=36f9a2444accd8393aa91ed7c931f797&language=en-US&query=${searchValue}&page=1&include_adult=false`);
      setSearchedMovies(data.results[0]);
    }
    searchMovie();
  }, [searchValue]);

  return(
    <MovieContext.Provider value={{ movies, hotMovies, searchedMovies, searchValue, setSearchValue }}>
      {children}
    </MovieContext.Provider>
  );
}