import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 6.7rem;
  border-bottom: 1px solid #121212;
  mix-blend-mode: normal;

  position: relative;
`;

export const Content = styled.div`
  max-width: 1120px;
  height: 6.7rem;
  margin: 0 auto;
  padding: 2rem 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    > span {
      font-size: 1.5rem;
      color: var(--white);
      font-weight: 500;
    }

    span + span {
      font-size: 1.5rem;
      color: var(--pink);
      font-weight: 700;
    }
  }

  div + div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      font-size: 1rem;
      color: var(--light-gray);
      margin-right: 3rem;
      text-decoration: none;
      height: 6.7rem;

      display: flex;
      align-items: center;

      transition: all 0.2s;

      &:hover {
        filter: brightness(0.8)
      }
    }

    a.active {
      margin-top: 2px;
      border-bottom: 2px solid var(--pink);

      &:hover {
        filter: none;
      }
    }

    a + a {
      margin-right: 4rem;
    }

    button {
      background: transparent;
      border: 0;
      cursor: pointer;
      transition: all 0.2s;
      font-size: 0;

      &:hover {
        filter: brightness(0.8)
      }
    }
  }
`;