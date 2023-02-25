import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: ${p => p.theme.breakpoints.values.md}px) {
    min-width: ${p => p.theme.breakpoints.values.md}px;
  }
  @media (min-width: ${p => p.theme.breakpoints.values.lg}px) {
    width: ${p => p.theme.breakpoints.values.lg}px;
  }
  @media (min-width: ${p => p.theme.breakpoints.values.xl}px) {
    width: ${p => p.theme.breakpoints.values.xl}px;
  }
  @media (min-width: ${p => p.theme.breakpoints.values.xxl}px) {
    width: ${p => p.theme.breakpoints.values.xxl}px;
  }
`;

export default Container;
