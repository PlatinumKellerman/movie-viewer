import styled from 'styled-components';

export const MainWrapper = styled.div`
  padding: 30px;
`;

export const Poster = styled.img`
  width: auto;
  margin-bottom: 20px;
`;

export const MovieTitle = styled.h3`
  margin-bottom: 20px;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.light};
`;

export const InfoWrapper = styled.div`
  display: flex;
  padding: 15px;
  background-color: ${p => p.theme.colors.dark};
`;

export const ParamsList = styled.ul`
  width: 30%;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.primary};
  font-weight: 700;
`;

export const PropertiesList = styled.ul`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m};
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

export const HomepageLink = styled.a`
  cursor: pointer;
  &:hover,
  &:focus,
  &:active {
    color: ${p => p.theme.colors.accent};
  }
`;
