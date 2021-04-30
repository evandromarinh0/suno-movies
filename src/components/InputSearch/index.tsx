import { useContext } from "react";
import { MovieContext } from "../../context/MovieContext";

import ratingImg from '../../assets/rating.svg';
import noImgImg from '../../assets/no-cover.jpg';

import { Container } from "./styles";
import { useHistory } from "react-router";

export function InputSearch() {
  const { searchValue, setSearchValue, searchedMovies } = useContext(MovieContext);
  const history = useHistory();

  function handleNavigateToDetails() {
    history.push(`/catalog/${searchedMovies?.id}`);
    setSearchValue('');
  }

  return(
    <Container>
      <input 
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
        type='text' 
        placeholder='Ex: Tenet' 
      />

      { searchedMovies && searchValue && (
          <div>
            <button onClick={() => handleNavigateToDetails()}>
              {searchedMovies.poster_path ? (
                <img src={`https://image.tmdb.org/t/p/w500${searchedMovies.poster_path}`} alt="Cover"/>
              ) : (
                <img style={{ objectFit: 'contain' }} src={noImgImg} alt="Cover"/>
              )}
            </button>
            <div>
              <strong>{searchedMovies.title}</strong>
              <span>Gênero</span>
              <div>
                <img src={ratingImg} alt=""/>
                <span>{searchedMovies.vote_average}</span>
              </div>
            </div>
          </div>
        )}
    </Container>
  );
}