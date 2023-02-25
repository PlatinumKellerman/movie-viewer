import styled from 'styled-components';
import { ReactComponent as Logo } from '../../../assets/HeaderLogo/logo.svg';

export const HeaderBar = styled.header`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0 0 10px 10px;
  background-color: ${p => p.theme.colors.dark};

  @media (min-width: ${p => p.theme.breakpoints.values.md}px) {
    min-width: ${p => p.theme.breakpoints.values.md}px;
    padding: 20px 40px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
`;

export const HeaderTitle = styled.h1`
  margin-left: auto;
  margin-right: auto;
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.primary};
  font-family: ${p => p.theme.fonts.heading};

  @media (min-width: ${p => p.theme.breakpoints.values.md}px) {
    font-size: ${p => p.theme.fontSizes.xl};
  }
`;

export const UserNavWrapper = styled.div`
  color: ${p => p.theme.colors.primary};
  font-family: ${p => p.theme.fonts.body};
`;

export const HeaderLogo = styled(Logo)`
  width: 50px;
  height: 50px;
  color: ${p => p.theme.colors.primary};
`;
