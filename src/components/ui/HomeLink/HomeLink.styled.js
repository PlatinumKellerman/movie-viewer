import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const GoBackLink = styled(Link)`
  margin-right: auto;
  margin-left: auto;
  padding: 15px 60px;
  border: 1px solid ${p => p.theme.colors.primary};
  border-radius: 10px;
  color: ${p => p.theme.colors.light};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m};
  &:hover,
  :focus,
  :active {
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.light};
  }
`;
