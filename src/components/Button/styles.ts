import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.button`
  height: 2.8125rem;
  padding: 0 2rem;
  margin-right: 1rem;

  background: linear-gradient(180deg, #212125 0%, #2E2E35 100%), #212125;
  mix-blend-mode: normal;
  border: 2px solid #2E2D31;
  border-radius: 0.25rem;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  position: relative;

  transition: all 0.2s;

  &:hover {
    background: ${shade(0.2, '#2E2E35' )}
  }

  > img {
    margin-right: 0.5rem;
  }
`;
