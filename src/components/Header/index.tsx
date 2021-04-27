
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { InputSearch } from "../InputSearch";

import searchIcon from '../../assets/search.svg';

import { Container, Content } from "./styles";

export function Header() {
  const { pathname } = useLocation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  function toggleInputSearch() {
    setIsSearchOpen(!isSearchOpen);
  }

  return(
    <Container>
      <Content>
        <div>
          <span>SUNO </span><span>MOVIES</span>
        </div>
        <div>
          <a href='#home'>
            HOME
          </a>
          <Link to='/' className={pathname === '/' ? 'active' : ''}>
            CATÁLOGO
          </Link>
          <button onClick={toggleInputSearch} type='button'>
            <img src={searchIcon} alt="Pesquisar"/>
          </button>
          { isSearchOpen && (
            <InputSearch />
          )}
        </div>
      </Content>
    </Container>
  );
}