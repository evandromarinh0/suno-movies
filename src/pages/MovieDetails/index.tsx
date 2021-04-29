import { Header } from "../../components/Header";

import ratingImg from '../../assets/rating.svg';

import { Container } from './styles';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";

interface ParamsProps {
  id: number;
}

interface DetailedMovieProps {
  title: string;
  poster_path: string;
  genres: Array<{
    id: number;
    name: string;
  }>;
  vote_average: number;
  overview: string;
}

export function MovieDetails() {
  const route = useParams();
  const routeParams = route as ParamsProps;
  const [detailedMovie, setDetailedMovie] = useState<DetailedMovieProps>();

  useEffect(() => {
    async function loadMovieDetails(): Promise<void> {
      const response = await api.get(`/movie/${routeParams.id}?api_key=36f9a2444accd8393aa91ed7c931f797`)
      
      setDetailedMovie(response.data);
      console.log(response.data);
    }
    loadMovieDetails();
  }, [routeParams.id]);

  // /movie/{movie_id}/videos


  return(
    <>
      <Header />
      <Container>
        { detailedMovie && (
          <>
          <img src={`https://image.tmdb.org/t/p/w500${detailedMovie.poster_path}`} alt="Cover"/>
          <div>
            <strong>{detailedMovie.title}</strong>
            <div>
              <span>{detailedMovie.genres[0].name}, {detailedMovie.genres[1].name}</span>
  
              <div>
                <img src={ratingImg} alt="Rating" />
                <span>{detailedMovie.vote_average}</span>
              </div>
            </div>
            <span>Sinopse</span>
            <p>
              {detailedMovie.overview}
            </p>
          </div>
          </>
        )}
      </Container>
    </>
  );
}