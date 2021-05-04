import styled from 'styled-components';

export const Container = styled.div`
  height: 13rem;
  width: 10.2rem;
  margin-top: 0.3rem;
  padding: 0.5rem;
  position: absolute;
  background: linear-gradient(180deg, #212125 0%, #2E2E35 100%), #212125;
  z-index: 10;


  > ul {
    list-style: none;

    li {
      color: var(--light-gray);
      margin-bottom: 0.3rem;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
