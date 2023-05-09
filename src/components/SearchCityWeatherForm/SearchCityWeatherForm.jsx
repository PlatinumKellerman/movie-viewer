import Container from 'layout/common/Container/Container';
import { uaCities, usaStateCapitals } from '../../constants/cities';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  SearchInput,
  SearchButton,
  StyledForm,
  ErrorText,
  CitiesWrapper,
  CitiesList,
  CityNameItem,
  CityNameButton,
  UsaCityNameButton,
  UsaCityNameSpan,
} from './SearchCityWeatherForm.styled';

const SearchCityWeatherForm = ({ onSubmit }) => {
  const schema = yup.object().shape({
    query: yup.string().required('Search field cannot be empty'),
  });

  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  const handleCityWeather = city => {
    onSubmit({ query: city });
  };

  return (
    <Container>
      <Formik
        initialValues={{ query: '' }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <StyledForm>
          <SearchInput
            name="query"
            type="text"
            autoComplete="on"
            autoFocus
            placeholder="Enter city name"
          />
          <SearchButton type="submit">Search</SearchButton>
          <ErrorMessage
            render={message => <ErrorText>{message}</ErrorText>}
            name="query"
          />
        </StyledForm>
      </Formik>
      <CitiesWrapper>
        <CitiesList>
          {uaCities.map(city => (
            <CityNameItem key={city}>
              <CityNameButton
                type="button"
                onClick={() => handleCityWeather(city)}
              >
                {city}
              </CityNameButton>
            </CityNameItem>
          ))}
        </CitiesList>
        <CitiesList>
          {usaStateCapitals.map(city => (
            <CityNameItem key={city}>
              <UsaCityNameButton
                type="button"
                onClick={() => handleCityWeather(city)}
              >
                <UsaCityNameSpan>{city}</UsaCityNameSpan>
              </UsaCityNameButton>
            </CityNameItem>
          ))}
        </CitiesList>
      </CitiesWrapper>
    </Container>
  );
};

export default SearchCityWeatherForm;
