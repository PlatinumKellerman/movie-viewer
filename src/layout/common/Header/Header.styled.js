import styled from 'styled-components';
import { ReactComponent as Logo } from '../../../assets/HeaderLogo/logo.svg';

export const HeaderBar = styled.header`
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0 0 10px 10px;
  background-color: ${p => p.theme.colors.dark};
`;

export const HeaderTitle = styled.h1`
  font-size: ${p => p.theme.fontSizes.xl};
  color: ${p => p.theme.colors.primary};
  font-family: ${p => p.theme.fonts.heading};
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
