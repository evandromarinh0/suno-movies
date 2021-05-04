import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: var(--darker-gray);
  padding-bottom: 16rem;

  > header {
    width: 100%;

    display: flex;
    align-items: center;
    
    background: var(--dark-gray);
    padding: 4rem 0;
    height: 6.687rem;
    box-shadow: 0px 4px 25px 4px rgba(0, 0, 0, 0.3);

    @media(min-width: 1080px) {
      padding: 4rem 4rem 4rem 8.5rem;
    }

    > img {
      margin-left: 12%;
      margin-right: 1rem;
    }

    span {
      font-size: 1.5rem;
      color: var(--white);
      font-weight: 600;
    }

    span + span {
      margin-left: 0.5rem;
      font-size: 1.5rem;
      color: var(--light-gray);
      font-weight: 300;
    }
  }
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 2rem auto 0;
  background: var(--darker-gray);
`;

export const ButtonSection = styled.div`
  display: flex;

  > div + div {
    margin-left: auto;
  }

  @media(max-width: 720px) {
    > div {
      margin: 0 auto;
      margin-top: 1rem;
    }

    > div + div {
      display: none;
    }
  }
`;

export const GenreSelection = styled.div`
  height: 9rem;
  width: 10rem;
  position: absolute;
  background: var(--dark-gray);
  margin-top: 0.3rem;
  padding: 0.5rem;
  color: var(--light-gray);

  cursor: default;
  list-style: none;
`;

export const MovieSection = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;

export const More = styled.div`
  display: flex;
  margin-top: 5rem;
  justify-content: center;
`;