import { Container, Content, Genre, Rating } from "./styles";

import testingImg from '../../assets/testing.png';
import ratingIcon from '../../assets/rating.svg';
import { Movie } from "../../types/types";
import { useHistory } from "react-router";

interface MovieItemProps {
  movie: Movie;
}

export function SwiperItem({ movie }: MovieItemProps) {
  const history = useHistory();

  return(
    <Container>
      <Content>
        <button onClick={() => history.push(`/catalog/${movie.id}`)} type='button'>
          <img src={testingImg} alt="Movie Cover"/>
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