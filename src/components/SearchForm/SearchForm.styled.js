import styled from 'styled-components';
import { Field, Form } from 'formik';

export const StyledForm = styled(Form)`
  margin-bottom: 20px;
`;

export const SearchInput = styled(Field)`
  width: 200px;
  font-size: 20px;
  border-radius: 5px;
  border: 0.5px solid black;
  outline: none;
  padding: 5px;
  margin-right: 10px;
  ::placeholder {
    font-size: 16px;
  }
`;

export const SearchButton = styled.button`
  border: 0.5px solid black;
  border-radius: 5px;
  padding: 5px;
  outline: none;
  font-size: 20px;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  &:hover,
  :focus,
  :active {
    background-color: skyblue;
    color: white;
  }
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 16px;
  padding: 5px;
`;
