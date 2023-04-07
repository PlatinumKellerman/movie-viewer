import styled from 'styled-components';

export const MainWrapper = styled.div`
  padding: 15px 10px;
  @media (min-width: ${p => p.theme.breakpoints.values.lg}px) {
    padding: 20px 40px;
    margin-top: 20px;
  }
`;

export const Wrapper = styled.div`
  margin-top: 20px;
  @media (min-width: ${p => p.theme.breakpoints.values.lg}px) {
    display: flex;
    justify-content: space-evenly;
  }
`;

export const PosterWrapper = styled.div`
  @media (min-width: ${p => p.theme.breakpoints.values.lg}px) {
    margin-right: 30px;
  }
`;

export const Poster = styled.img`
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  border-radius: 20px;
  @media (min-width: ${p => p.theme.breakpoints.values.lg}px) {
    min-width: 300px;
    max-width: 500px;
  }
`;

export const MovieTitle = styled.h3`
  margin-bottom: 20px;
  text-align: center;
  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.light};
  &:hover,
  &:focus,
  &:active {
    color: ${p => p.theme.colors.primary};
  }
  @media (min-width: ${p => p.theme.breakpoints.values.lg}px) {
    font-size: ${p => p.theme.fontSizes.l};
  }
`;

export const InfoWrapper = styled.div`
  padding: 10px;
  background-color: ${p => p.theme.colors.dark};
  border-radius: 20px;
  @media (min-width: ${p => p.theme.breakpoints.values.lg}px) {
    padding: 25px;
    width: 75%;
    height: 75%;
  }
`;

export const DetailsWrapper = styled.div`
  width: 100%;
  white-space: wrap;
`;

export const InfoParams = styled.p`
  margin-bottom: 10px;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.xs};
  color: ${p => p.theme.colors.primary};
  @media (min-width: ${p => p.theme.breakpoints.values.lg}px) {
    font-size: ${p => p.theme.fontSizes.l};
  }
  &:last-child {
    margin-bottom: 0px;
  }
`;

export const InfoValue = styled.p`
  letter-spacing: 2px;
  margin-bottom: 20px;
  padding-bottom: 5px;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.xs};
  color: ${p => p.theme.colors.light};
  @media (min-width: ${p => p.theme.breakpoints.values.lg}px) {
    font-size: ${p => p.theme.fontSizes.m};
  }
  &:last-child {
    margin-bottom: 0px;
  }
`;

export const Accent = styled.span`
  padding: 2px 5px;
  background-color: ${p => p.theme.colors.accent};
  border-radius: 5px;
`;

export const NotFindValue = styled.span`
  margin-bottom: 20px;
`;