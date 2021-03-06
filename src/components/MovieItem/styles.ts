import styled from 'styled-components';

import playImg from '../../assets/play.svg';

export const Container = styled.div`
  display: flex;
  max-width: 600px;
  max-height: 251px;

  > button {
    background: none;
    border: none;

    position: relative;

    &:hover {
      &:before {
        content:'';
        position: absolute;
        width: 100%;
        height: 232px;

        z-index: 3;
        background: url(${playImg}) rgba(254, 49, 137, 0.3) no-repeat center;
        box-shadow: 0px 0px 25px -1px rgba(254, 49, 137, 0.37);
        border-radius: 0.25rem;
      }
    }

    > img {
      max-width: 157px;
      max-height: 232px;
      object-fit: cover;
    }
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

      white-space: nowrap;
      text-overflow: ellipsis;
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
