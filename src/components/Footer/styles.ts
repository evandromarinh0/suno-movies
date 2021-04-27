import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 7rem;
  background: var(--darkest-gray);

  > strong {
    font-size: 1.5rem;
    font-weight: 400;
    color: var(--light-gray);
  }
`;
