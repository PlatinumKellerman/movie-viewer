import { Formik, ErrorMessage } from 'formik';
import { useState } from 'react';
import * as yup from 'yup';
import {
  SearchInput,
  SearchButton,
  StyledForm,
  ErrorText,
} from './SearchForm.styled';

const SearchForm = ({ onSubmit }) => {
  const [touched, setTouched] = useState(false);

  const schema = yup.object().shape({
    query: yup.string().required('Search field cannot be empty'),
  });

  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{ query: '' }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <StyledForm>
          <SearchInput
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            onBlur={() => setTouched(true)}
          />
          <SearchButton type="submit">Search</SearchButton>
          <ErrorMessage
            render={message => <ErrorText>{touched && message}</ErrorText>}
            name="query"
          />
        </StyledForm>
      </Formik>
    </>
  );
};

export default SearchForm;
