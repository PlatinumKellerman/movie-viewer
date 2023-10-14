import styled from 'styled-components';
import { Field, Form } from 'formik';
import flag from '../../assets/usaFlag.png';

export const StyledForm = styled(Form)`
  margin-bottom: 20px;
`;

export const SearchInput = styled(Field)`
  display: block;
  background-color: ${p => p.theme.colors.muted};
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  font-size: ${p => p.theme.fontSizes.m};
  border-radius: 8px;
  border: 1px solid ${p => p.theme.colors.primary};
  outline: none;
  padding: 5px;
  margin-top: 10px;
  ::placeholder {
    font-size: ${p => p.theme.fontSizes.m};
    text-align: center;
  }
  &:hover,
  :focus,
  :active {
    background-color: ${p => p.theme.colors.light};
    border: 1px solid ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.dark};
    transition-duration: 500ms;
    transition-timing-function: $timing-function;
  }
`;

export const SearchButton = styled.button`
  width: auto;
  margin-right: auto;
  margin-left: auto;
  padding: 5px 20px;
  background-color: ${p => p.theme.colors.muted};
  border: 1px solid ${p => p.theme.colors.primary};
  border-radius: 8px;
  color: ${p => p.theme.colors.dark};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m};
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

export const ErrorText = styled.p`
  color: ${p => p.theme.colors.accent};
  font-size: ${p => p.theme.fontSizes.xs};
  padding: 5px;
  text-align: center;
`;

export const CitiesWrapper = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: ${p => p.theme.breakpoints.values.xl}px) {
    padding: 15px 50px;
  }
`;

export const CitiesList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0px;
  }
`;

export const CityNameItem = styled.li`
  margin-right: 15px;
  &:last-child {
    margin-right: 0px;
  }
`;

export const CityNameButton = styled.button`
  padding: 3px 5px;
  font-size: ${p => p.theme.fontSizes.s};
  background: none;
  color: ${p => p.theme.colors.muted};
  font-family: ${p => p.theme.fonts.monospace};
  border: none;
  &:hover,
  :focus,
  :active {
    color: ${p => p.theme.colors.muted};
    background-color: rgba(0, 91, 187, 1);
    background-image: linear-gradient(
      135deg,
      rgba(0, 91, 187, 1) 50%,
      rgba(255, 213, 0, 0.8) 50%
    );
    border-radius: 5px;
    color: ${p => p.theme.colors.light};
    transition-duration: 500ms;
    transition-timing-function: $timing-function;
  }
`;

export const UsaCityNameButton = styled.button`
  padding: 3px 5px;
  font-size: ${p => p.theme.fontSizes.s};
  background: none;
  color: ${p => p.theme.colors.muted};
  font-family: ${p => p.theme.fonts.monospace};
  border: none;
  &:hover,
  :focus,
  :active {
    background-image: linear-gradient(
        to right,
        rgba(47, 48, 58, 0.6),
        rgba(47, 48, 58, 0.6)
      ),
      url(${flag});
    background-size: 100%;
    background-repeat: no-repeat;
    border-radius: 5px;
    transition-duration: 500ms;
    transition-timing-function: $timing-function;
  }
`;

export const UsaCityNameSpan = styled.p`
  &:hover,
  :focus,
  :active {
    transform: scale(1.05);
    transition-duration: 500ms;
    transition-timing-function: $timing-function;
  }
`;

export const UaMenuButton = styled.button`
  padding: 3px 5px;
  font-size: ${p => p.theme.fontSizes.l};
  background: none;
  color: ${p => p.theme.colors.muted};
  font-family: ${p => p.theme.fonts.monospace};
  border: none;
  &:hover,
  :focus,
  :active {
    color: ${p => p.theme.colors.muted};
    background-color: rgba(0, 91, 187, 1);
    background-image: linear-gradient(
      135deg,
      rgba(0, 91, 187, 1) 50%,
      rgba(255, 213, 0, 0.8) 50%
    );
    border-radius: 5px;
    color: ${p => p.theme.colors.light};
    transition-duration: 500ms;
    transition-timing-function: $timing-function;
    transform: scale(1.05);
  }
`;

export const UsaMenuButton = styled.button`
  padding: 3px 5px;
  font-size: ${p => p.theme.fontSizes.l};
  background: none;
  color: ${p => p.theme.colors.muted};
  font-family: ${p => p.theme.fonts.monospace};
  border: none;
  &:hover,
  :focus,
  :active {
    background-image: linear-gradient(
        to right,
        rgba(47, 48, 58, 0.6),
        rgba(47, 48, 58, 0.6)
      ),
      url(${flag});
    background-size: 130%;
    background-repeat: no-repeat;
    border-radius: 5px;
    transition-duration: 500ms;
    transition-timing-function: $timing-function;
    transform: scale(1.05);
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px, 50px;
  margin-bottom: 50px;
`;
