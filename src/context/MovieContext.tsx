import { useEffect } from "react";
import { createContext, ReactNode, useState } from "react";
import api from "../services/api";
import { Movie } from "../types/types";

interface MovieContextData {
  movies: Movie[];
  hotMovies: Movie[];
}

interface MovieProviderProps {
  children: ReactNode;
}

export const MovieContext = createContext({} as MovieContextData);

export function MovieProvider({ children }: MovieProviderProps) {
  const [movies, setMovies] = useState([]);
  const [hotMovies, setHotMovies] = useState([]);

  useEffect(() => {
    async function getHotMovies(): Promise<void> {
      const { data } = await api.get('/discover/movie?api_key=36f9a2444accd8393aa91ed7c931f797');
      setHotMovies(data.results);
      console.log(data.results);
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

  return(
    <MovieContext.Provider value={{ movies, hotMovies }}>
      {children}
    </MovieContext.Provider>
  );
}