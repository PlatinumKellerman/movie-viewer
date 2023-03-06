import styled from 'styled-components';

export const MainWrapper = styled.div`
  padding: 15px 10px;
`;

export const Poster = styled.img`
  max-width: 300px;
  margin-top: 40px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 20px;
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
`;

export const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 10px;
  background-color: ${p => p.theme.colors.dark};
  border-radius: 10px;
`;

export const ParamsList = styled.ul`
  white-space: nowrap;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.xs};
  color: ${p => p.theme.colors.primary};
`;

export const PropertiesList = styled.ul`
  white-space: wrap;
  margin-left: 20px;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.xs};
  color: ${p => p.theme.colors.light};
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
