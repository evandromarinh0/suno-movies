import styled from 'styled-components';

export const Container = styled.div`
  height: 13rem;
  width: 10rem;
  margin-top: 0.3rem;
  padding: 0.5rem;
  position: absolute;
  background: var(--medium-gray);

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
