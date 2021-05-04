
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { InputSearch } from "../InputSearch";

import searchIcon from '../../assets/search.svg';
import menuIcon from '../../assets/menu.svg';

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
        <>
          <button>
            <img src={menuIcon} alt="Hamburger"/>
          </button>
        </>
        <div>
          <span>SUNO </span><span>MOVIES</span>
        </div>
        <div>
          <Link to="/#home">HOME</Link>
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