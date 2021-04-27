import { Header } from "../../components/Header";

import testingImg from '../../assets/testing4.png';
import ratingImg from '../../assets/rating.svg';

import { Container } from './styles';
import { useContext } from "react";
import { MovieContext } from "../../context/MovieContext";
import { useParams } from "react-router-dom";

export function MovieDetails() {
  const { movies, hotMovies } = useContext(MovieContext);
  const id = useParams<number>();

  return(
    <>
      <Header />
      <Container>
        <img src={testingImg} alt="Cover"/>
        <div>
          <strong>Solteira quase surtando</strong>
          <div>
            <span>Comédia</span>

            <div>
              <img src={ratingImg} alt="Rating" />
              <span>8.4</span>
            </div>
          </div>
          <span>Sinopse</span>
          <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
          </p>
        </div>
      </Container>
    </>
  );
}