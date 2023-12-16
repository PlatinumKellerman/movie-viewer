import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: ${p => p.theme.breakpoints.values.md}px) {
    min-width: ${p => p.theme.breakpoints.values.md}px;
  }
`;

export default Container;
