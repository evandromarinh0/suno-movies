import { Header } from "../../components/Header";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import ratingImg from '../../assets/rating.svg';
import noImgImg from '../../assets/no-cover2.jpg';
import api from "../../services/api";

import { PinkButton } from "../../components/PinkButton";
import { Container } from './styles';


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

interface DetailedMovieVideoProps {
  results: Array<{
    key: string;
    title: string;
  }>;
}

export function MovieDetails() {
  const route = useParams();
  const routeParams = route as ParamsProps;
  const [detailedMovie, setDetailedMovie] = useState<DetailedMovieProps>();
  const [detailedMovieVideo ,setDetailedMovieVideo] = useState<DetailedMovieVideoProps>();

  useEffect(() => {
    async function loadMovieDetails(): Promise<void> {
      const response = await api.get(`/movie/${routeParams.id}?api_key=36f9a2444accd8393aa91ed7c931f797`)
      
      setDetailedMovie(response.data);
    }
    loadMovieDetails();
  }, [routeParams.id]);

  useEffect(() => {
    async function loadMovieDetailsVideo(): Promise<void> {
      const response = await api.get(`/movie/${routeParams.id}/videos?api_key=36f9a2444accd8393aa91ed7c931f797`)
      
      setDetailedMovieVideo(response.data);
      console.log(response.data);
    }
    loadMovieDetailsVideo();
  }, [routeParams.id]);

  return(
    <>
      <Header />
      <Container>
        { detailedMovie && (
          <div>
            { detailedMovie.poster_path ? (
              <img src={`https://image.tmdb.org/t/p/w500${detailedMovie.poster_path}`} alt="Cover"/>
            ) : (
              <img src={noImgImg} alt="NoCover"/>
            )}
            <div>
              <strong>{detailedMovie.title}</strong>
              <div>
                { detailedMovie.genres.length === 1 ? (
                  <span>{detailedMovie.genres[0].name}</span>
                ) : (
                  <span>{detailedMovie.genres[0].name}, {detailedMovie.genres[1].name}</span>
                )}
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
          </div>
        )}

        { detailedMovieVideo && (
          <div>
            <strong>Trailer</strong>
            <div>
              <iframe width="1119" height="600" src={`https://www.youtube.com/embed/${detailedMovieVideo.results[0].key}`} title={detailedMovieVideo.results[0].title}  allow="accelerometer; fullscreen;  autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </div>
            <div>
              <Link to='/'>
                <PinkButton>voltar</PinkButton>
              </Link>
            </div>
          </div>
        )}
      </Container>
    </>
  );
}