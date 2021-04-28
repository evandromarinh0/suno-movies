import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.button`
  height: 2.8125rem;
  border: 0;
  padding: 0 2rem;

  background: linear-gradient(288.57deg, rgba(254, 49, 137, 0.5) 5.7%, rgba(255, 0, 110, 0.5) 70.08%), #FF559E;
  mix-blend-mode: normal;
  border-radius: 0.25rem;

  filter: drop-shadow(0px 0px 6px #FF0772);

  transition: all 0.2s;

  &:hover {
    background: ${darken(0.2, 'rgba(254, 49, 137, 0.5)' )}
  }
`;
