import styled from 'styled-components';

import playImg from '../../assets/play.svg';

export const Container = styled.form`
  width: 100%;
  height: 21.5rem;
  background: var(--dark-gray);
  border-top: 1px solid var(--darkest-gray);
  padding: 2rem 16rem;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  
  right: 0;
  left: 0;
  top: 100%;
  position: absolute;
  z-index: 10;

  input {
    width: 100%;
    border: 0;
    outline: 0;
    border-bottom: 2px solid var(--pink);
    background: transparent;
    font-size: 2rem;
    font-weight: 500;
    padding: 1rem 2rem;
    color: var(--light-gray);
  }

  > div {
    max-width: 21rem;
    max-height: 13rem;
    background: var(--medium-to-dark-gray);
    margin-top: 1rem;
    padding: 1rem;
    border: 1px solid #313136;
    border-radius: 0.25rem;

    display: flex;
    align-items: center;

    > button {
      position: relative;
      &:hover {
        &:before {
          content:'';
          position: absolute;
          width: 98px;
          height: 147px;

          z-index: 3;
          background: url(${playImg}) rgba(254, 49, 137, 0.3) no-repeat center;
          box-shadow: 0px 0px 25px -1px rgba(254, 49, 137, 0.37);
          border-radius: 0.25rem;
        }
      }

      > img {
        width: 6.125rem;
        height: 9.1875rem;
        object-fit: cover;
        border-radius: 0.25rem;
      }
    }


    > div {
      margin-left: 1rem;
      padding-bottom: 3.125rem;

      > strong {
        padding-right: 0.5rem;
        display: block;
        max-width: 195px;
        font-size: 1.375rem;
        font-weight: 500;
        color: var(--light-gray);

        
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      > span {
        font-size: 1rem;
        font-weight: 300;
        color: var(--pink);
      }

      > div {
        display: flex;
        align-items: center;

        > img {
          margin-right: 0.5rem;
        }

        > span {
          display: block;
          font-size: 1rem;
          font-weight: 400;
          color: var(--light-gray);
        }
      }
    }
  }
`;
