import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const GoBackLink = styled(Link)`
  margin-top: 60px;
  margin-left: 20px;
  padding: 5px 20px;
  border: 1px solid ${p => p.theme.colors.primary};
  border-radius: 8px;
  color: ${p => p.theme.colors.light};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.s};
  &:hover,
  :focus,
  :active {
    background-color: ${p => p.theme.colors.accent};
    border: 1px solid ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.light};
    transition-duration: 500ms;
    transition-timing-function: $timing-function;
  }
`;
