import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-width: 600px;
  max-height: 251px;

  > button {
    background: none;
    border: none;
  }

  img {
    max-height: 232px;
  }

  > div {
    margin-left: 1.5rem;
    display: flex;
    flex-direction: column;
    max-height: 228px;
    overflow: hidden;
    text-overflow: ellipsis;

    strong {
      font-size: 1.3rem;
      font-weight: 400;
      color: var(--light-gray);
    }

    > span {
      font-size: 1rem;
      font-weight: 300;
      color: var(--pink);
      margin-bottom: 1rem;
    }

    > div {
      > img {
        margin-right: 0.5rem;
      }

      > span {
        color: var(--light-gray);
        font-size: 1rem;
        font-weight: 400;
      }
    }

    > div + span {
      margin-top: 1rem;
      color: var(--not-so-dark-gray);
      font-weight: 300;
      font-size: 0.78rem;
      line-height: 1.3rem;
    }
  }
`;
