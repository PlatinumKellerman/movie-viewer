import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const InfoLinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  color: ${p => p.theme.colors.light};
  font-size: ${p => p.theme.fontSizes.m};
`;

export const InfoLink = styled(Link)`
  text-align: center;
  width: 100px;
  border-radius: 8px;
  margin-right: 50px;
  padding: 10px;
  border: 1px solid ${p => p.theme.colors.primary};
  &:hover,
  :focus,
  :active {
    background-color: ${p => p.theme.colors.accent};
    border: 1px solid ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.light};
    transition-duration: 500ms;
    transition-timing-function: $timing-function;
  }
  &:last-child {
    margin-right: 0px;
  }
`;
