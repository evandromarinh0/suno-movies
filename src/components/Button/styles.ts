import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: var(--medium-gray);
  height: 2.8125rem;
  border: 0;
  border-radius: 0.5rem;
  padding: 0 2rem;
  margin-right: 1rem;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  transition: all 0.2s;

  position: relative;

  &:hover {
    background: ${shade(0.2, '#2E2D31')};
  }

  > img {
    margin-right: 0.5rem;
  }
`;
