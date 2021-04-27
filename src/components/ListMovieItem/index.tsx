import { Container } from "./styles";

import movieCoverImg from '../../assets/testing3.png';
import ratingIcon from '../../assets/rating.svg';
import { Movie } from "../../types/types";
import { useHistory } from "react-router";

interface MovieItemProps {
  movie: Movie;
}

export function ListMovieItem({ movie }: MovieItemProps) {
  const history = useHistory();

  return(
    <Container>
      <button onClick={() => history.push(`/catalog/${movie.id}`)} type='button'>
        <img src={movieCoverImg} alt="Cover"/>
      </button>
      <div>
        <strong>{movie.title}</strong>
        <span>Suspense, Terror</span>
        <div>
          <img src={ratingIcon} alt="Rating"/>
          <span>{movie.vote_average}</span>
        </div>
        <span>
          {movie.overview}
        </span>
      </div>
    </Container>
  );
}