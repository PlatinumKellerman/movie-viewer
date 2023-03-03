import styled from 'styled-components';

export const NotFoundWrapper = styled.div`
  width: 50%;
  height: 50%;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  background-color: ${p => p.theme.colors.darkGrey};
  padding: 50px;
  margin-top: 50px;
  border-radius: 10px;
  @media (min-width: ${p => p.theme.breakpoints.values.md}px) {
  }
`;

export const NotFoundNavWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 50px;
`;

export const NotFoundMessage = styled.p`
  font-family: ${p => p.theme.fonts.body};
  color: ${p => p.theme.colors.light};
  font-size: ${p => p.theme.fontSizes.m};
  @media (min-width: ${p => p.theme.breakpoints.values.md}px) {
    font-size: ${p => p.theme.fontSizes.xl};
  }
`;
