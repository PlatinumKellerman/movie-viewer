import { Formik, ErrorMessage, Form, Field } from 'formik';
import * as yup from 'yup';

const SearchCityWeatherForm = ({ onSubmit }) => {
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
        <Form>
          <Field
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search City"
          />
          <button type="submit">Search</button>
          <ErrorMessage render={message => <p>{message}</p>} name="query" />
        </Form>
      </Formik>
    </>
  );
};

export default SearchCityWeatherForm;
