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
  const { movies, renderMoreMovies } = useContext(MovieContext);
  const [listType, setListType] = useState(true);
  const [isGenreOpen, setIsGenreOpen] = useState(false);

  const moviesPerPage = 20;
  const currentPage = 1;

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

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
        <span>CATÁLOGO</span><span>COMPLETO</span>
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

            <PinkButton>mais populares</PinkButton>
          </div>
          <div>
            <Button onClick={toggleListType} >{listType ? 'em grid' : 'em lista'}</Button>
          </div>
        </ButtonSection>
        { listType ? (
          <MovieSection style={{ display: 'flex', flexDirection: 'column'}}>
            {currentMovies.map(movie => (
              <ListMovieItem key={movie.id} movie={movie} />
            ))}
          </MovieSection>
        ) : (
          <MovieSection>
            {currentMovies.map(movie => (
              <GridMovieItem key={movie.id} movie={movie} />
            ))}
          </MovieSection>
        )}
      </Content>
      <More>
        <a href="#catalog">
          <PinkButton onClick={renderMoreMovies}>carregar mais</PinkButton>
        </a>
      </More>
    </Container>
  );
}