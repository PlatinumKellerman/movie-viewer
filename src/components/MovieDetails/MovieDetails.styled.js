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
    justify-content: center;
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
export const SecondaryWrapper = styled.div`
  display: flex;
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
    width: 50%;
    height: 75%;
  }
`;

export const ParamsList = styled.ul`
  white-space: nowrap;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.xs};
  color: ${p => p.theme.colors.primary};
  @media (min-width: ${p => p.theme.breakpoints.values.lg}px) {
    font-size: ${p => p.theme.fontSizes.l};
  }
`;

export const PropertiesList = styled.ul`
  white-space: wrap;
  margin-left: 20px;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.xs};
  color: ${p => p.theme.colors.light};
  @media (min-width: ${p => p.theme.breakpoints.values.lg}px) {
    font-size: ${p => p.theme.fontSizes.l};
  }
`;

export const InfoParams = styled.li`
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0px;
  }
`;

export const InfoValue = styled.li`
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0px;
  }
`;

export const Accent = styled.span`
  padding: 2px 5px;
  background-color: ${p => p.theme.colors.accent};
  border-radius: 5px;
`;
