import styled from 'styled-components';

export const Container = styled.div`
  border-top: 2px solid var(--pink);

  @media(max-width: 720px) {
    display: none;
  }
`;
