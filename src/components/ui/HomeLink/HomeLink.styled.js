import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const GoBackLink = styled(Link)`
  margin-right: auto;
  margin-left: auto;
  padding: 5px 20px;
  border: 1px solid ${p => p.theme.colors.primary};
  border-radius: 10px;
  color: ${p => p.theme.colors.light};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.s};
  &:hover,
  :focus,
  :active {
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.light};
  }
  @media (min-width: ${p => p.theme.breakpoints.values.lg}px) {
    padding: 15px 60px;
    font-size: ${p => p.theme.fontSizes.m};
  }
`;
