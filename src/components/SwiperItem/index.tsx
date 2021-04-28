import { Container, Content, Genre, Rating } from "./styles";

import ratingIcon from '../../assets/rating.svg';
import { Movie } from "../../types/types";
import { useHistory } from "react-router";

interface MovieItemProps {
  movie: Movie;
}

export function SwiperItem({ movie }: MovieItemProps) {
  const history = useHistory();

  function handleNavigateToDetails() {
    history.push(`/catalog/${movie.id}`)
  }

  return(
    <Container>
      <Content>
        <button onClick={() => handleNavigateToDetails()} type='button'>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Movie Cover"/>
        </button>
        <div>
          <strong>{movie.title}</strong>
          <Genre>Suspense, Terror</Genre>
          <Rating>
            <img src={ratingIcon} alt="Movie Rate"/>
            <span className='grade'>{movie.vote_average}</span>
          </Rating>
        </div>
      </Content>
    </Container>
  );
}