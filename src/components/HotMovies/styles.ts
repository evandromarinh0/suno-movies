import styled from 'styled-components';

import backgroundImg from '../../assets/background-image.png';

export const Container = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center;
  background-size: cover;
  height: 44.875rem;
`;

export const Content = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem;

  > div {
    padding-left: 2rem;

    > img {
      margin-right: 1rem;
    }

    span {
      font-size: 1.5rem;
      color: var(--white);
      font-weight: 600;
    }

    span + span {
      font-size: 1.5rem;
      color: var(--light-gray);
      font-weight: 300;
    }
  }
`;
