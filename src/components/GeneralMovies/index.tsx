import { useContext, useState } from "react";
import { Button } from "../Button";
import { PinkButton } from '../PinkButton';
import { GridMovieItem } from "../MovieItem";
import { ListMovieItem } from "../ListMovieItem";
import { MovieContext } from "../../context/MovieContext";

import pinkCircleIcon from '../../assets/pink-circle.svg';

import { Container, ButtonSection, Content, MovieSection, More } from "./styles";
import { GenresList } from "../GenresList";

export function GeneralMovies() {
  const [listType, setListType] = useState(false);
  const [isGenreOpen, setIsGenreOpen] = useState(false);
  const { movies } = useContext(MovieContext);

  function toggleGenreOpen() {
    setIsGenreOpen(!isGenreOpen)
  }

  function toggleListType() {
    setListType(!listType);
  }

  return(
    <Container id="catalog">
      <header>
        <img src={pinkCircleIcon} alt="Topic"/>
        <span>CATÁLOGO</span><span>DA SEMANA</span>
      </header>

      <Content>
        <ButtonSection>
          <div>
            <Button onClick={toggleGenreOpen} style={{ position: 'relative' }}>
              por gênero
            </Button>

            {isGenreOpen && (
              <GenresList />
            )}

            <PinkButton style={{ cursor: 'not-allowed' }}>mais populares</PinkButton>
          </div>
          <div>
            <Button onClick={toggleListType} >{listType ? 'em grid' : 'em lista'}</Button>
          </div>
        </ButtonSection>
        { listType ? (
          <MovieSection style={{ display: 'flex', flexDirection: 'column'}}>
            {movies.map(movie => (
              <ListMovieItem key={movie.id} movie={movie} />
            ))}
          </MovieSection>
        ) : (
          <MovieSection>
            {movies.map(movie => (
              <GridMovieItem key={movie.id} movie={movie} />
            ))}
          </MovieSection>
        )}
      </Content>
      <More>
        <PinkButton>carregar mais</PinkButton>
      </More>
    </Container>
  );
}