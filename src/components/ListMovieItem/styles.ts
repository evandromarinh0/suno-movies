import styled from 'styled-components';

import playImg from '../../assets/play.svg';

export const Container = styled.div`
  display: flex;
  max-width: 995px;

  @media(max-width: 720px) {
    padding: 0 2rem;
  }

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

  & + div {
    margin-top: 1rem;
  }

  > div {
    margin-left: 2rem;
    width: 100%;

    > strong {
      font-size: 1.325rem;
      font-weight: 400;
      color: var(--light-gray);
    }

    > span {
      display: block;
      font-size: 1rem;
      font-weight: 300;
      color: var(--pink);
      margin-bottom: 1rem;
    }

    > div {

      > span {
        margin-left: 0.5rem;
        font-size: 1rem;
        font-weight: 400;
        color: var(--light-gray);
      }
    }

    > div + span {
      font-size: 1rem;
      line-height: 1.5rem;
      font-weight: 300;
      color: var(--not-so-dark-gray);
      margin-top: 1rem;
    }

    @media(max-width: 720px) {
      > div + span {
        display: none;
      }
    }
  }
`;

export const MobileOverview = styled.span`
  font-size: 1rem;
  line-height: 1.75rem;
  font-weight: 300;
  color: var(--not-so-dark-gray);
  padding: 0 2rem;
  margin-bottom: 3.5rem;

  @media(min-width: 1080px) {
    display: none;
  }
`;