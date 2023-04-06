import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  SearchInput,
  SearchButton,
  StyledForm,
  ErrorText,
} from './SearchForm.styled';

const SearchForm = ({ onSubmit }) => {
  const schema = yup.object().shape({
    query: yup.string().required('This field cannot be empty'),
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
          />
          <SearchButton type="submit">Search</SearchButton>
          <ErrorMessage
            render={message => <ErrorText>{message}</ErrorText>}
            name="query"
          />
        </StyledForm>
      </Formik>
    </>
  );
};

export default SearchForm;
