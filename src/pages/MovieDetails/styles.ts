import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  margin-top: 5rem;

  > img {
    width: 20.875rem;
    height: 30.875rem;
  }

  > div {
    margin-left: 2rem;

    > strong {
      display: block;
      color: var(--light-gray);
      font-weight: 700;
      line-height: 4rem;
      font-size: 3.75rem;
      max-width: 600px;
    }

    > div {
      display: flex;
      justify-content: space-between;

      > span {
        color: var(--pink);
        font-weight: 300;
        font-size: 1.5rem;
        margin: 2rem 0;
      }

      > div {
        display: flex;
        align-items: center;

        > img {
          margin-right: 1rem;
          height: 1.65rem;
        }

        > span {
          font-weight: 400;
          font-size: 1.65rem;
          color: var(--light-gray);
        }
      }
    }

    > span {
      display: block;
      margin-top: 1rem;
      font-weight: 600;
      font-size: 1.5rem;
      color: var(--light-gray);
    }

    > p {
      margin-top: 1rem;
      font-weight: 400;
      font-size: 1.375rem;
      line-height: 1.9375rem;
      color: var(--not-so-dark-gray)
    }
  }
`;