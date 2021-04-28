import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-width: 995px;

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
        background: rgba(254, 49, 137, 0.3);
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

    div + span {
      font-size: 1rem;
      line-height: 1.5rem;
      font-weight: 300;
      color: var(--not-so-dark-gray);
      margin-top: 1rem;
    }
  }
`;