import styled from 'styled-components';

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;

  @media (min-width: ${p => p.theme.breakpoints.values.md}px) {
    min-width: ${p => p.theme.breakpoints.values.md}px;
  }
  @media (min-width: ${p => p.theme.breakpoints.values.lg}px) {
    width: ${p => p.theme.breakpoints.values.lg}px;
  }
`;

export default Container;
