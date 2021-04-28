import styled from 'styled-components';

import playImg from '../../assets/play.svg';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  padding: 0 1rem;

  
`;

export const Content = styled.div`
  width: 100%;

  > button {
    margin-top: 2rem;
    border: 0;
    background: 0;

    position: relative;

    &:hover {
      &:before {
        content:'';
        position: absolute;
        width: 100%;
        height: 329px;

        z-index: 3;
        background: url(${playImg}) rgba(254, 49, 137, 0.3) no-repeat center;
        box-shadow: 0px 0px 25px -1px rgba(254, 49, 137, 0.37);
        border-radius: 0.25rem;
      }
    }

    > img {
      flex: 1;
      max-height: 329px;
      max-width: 219px;
      object-fit: cover;
      
    }
  }

  > div {
    display: flex;
    flex-direction: column;

    strong {
      font-size: 1.5rem;
      line-height: 2rem;
      font-weight: 500;
      color: var(--white)
    }
  }
`;

export const Genre = styled.div`
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 300;
  color: var(--pink);
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;

  img {
    font-size: 1rem;
    margin-right: 0.5rem;
  }

  .grade {
    margin-top: 0.03rem;
    font-size: 1rem;
    font-weight: 400;
  }
`;