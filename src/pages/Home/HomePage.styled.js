import styled from 'styled-components';

export const HomePageTitle = styled.h2`
  margin: 10px auto;
  padding: 0 10px;
  text-align: center;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.dark};
  text-shadow: ${p => p.theme.colors.primary} 1px 0px 0px,
    ${p => p.theme.colors.primary} 0px 1px 0px,
    ${p => p.theme.colors.primary} 0px -1px 0px,
    ${p => p.theme.colors.primary} -1px 0px 0px;

  @media (min-width: ${p => p.theme.breakpoints.values.md}px) {
    font-size: ${p => p.theme.fontSizes.l};
    margin: 30px auto;
  }
`;
