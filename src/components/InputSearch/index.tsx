import { Container } from "./styles";

import ratingImg from '../../assets/rating.svg';

import testingImg from '../../assets/testing5.png';
import { useState } from "react";

export function InputSearch() {
  const [searchValue, setSearchValue] = useState('');
  console.log(searchValue);

  return(
    <Container>
      <input 
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
        type='text' 
        placeholder='Ex: Interestellar' 
      />

      <div>
        <img src={testingImg} alt="Cover"/>
        <div>
          <strong>The Specials</strong>
          <span>Drama, Comédia</span>
          <div>
            <img src={ratingImg} alt=""/>
            <span>8.4</span>
          </div>
        </div>
      </div>
    </Container>
  );
}