import styled from 'styled-components';

export const Container = styled.form`
  width: 100%;
  height: 22.5rem;
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
    max-width: 18.875rem;
    max-height: 11.9375rem;
    background: var(--medium-to-dark-gray);
    margin-top: 1rem;
    padding: 1rem;
    border: 1px solid #313136;
    border-radius: 0.25rem;

    display: flex;
    align-items: center;


    > div {
      margin-left: 1rem;
      padding-bottom: 2rem;

      > strong {
        display: block;
        font-size: 1.375rem;
        font-weight: 500;
        color: var(--light-gray);
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
