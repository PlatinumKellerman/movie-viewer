import styled from 'styled-components';

export const HomePageTitle = styled.h2`
  display: flex;
  justify-content: center;
  margin: 30px 0;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.dark};
  text-shadow: ${p => p.theme.colors.primary} 1px 0px 0px,
    ${p => p.theme.colors.primary} 0px 1px 0px,
    ${p => p.theme.colors.primary} 0px -1px 0px,
    ${p => p.theme.colors.primary} -1px 0px 0px;

  @media (min-width: ${p => p.theme.breakpoints.values.md}px) {
    font-size: ${p => p.theme.fontSizes.xl};
  }
`;
