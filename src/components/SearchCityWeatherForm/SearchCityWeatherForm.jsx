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
} from './SearchCityWeatherForm.styled';

const SearchCityWeatherForm = ({ onSubmit }) => {
  const schema = yup.object().shape({
    query: yup.string().required('Search field cannot be empty'),
  });

  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  const handleSmilaWeather = query => {
    onSubmit({ query });
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
          <CityNameItem>
            <CityNameButton
              type="button"
              onClick={() => handleSmilaWeather('Smila')}
            >
              Smila
            </CityNameButton>
          </CityNameItem>
          <CityNameItem>
            <CityNameButton
              type="button"
              onClick={() => handleSmilaWeather('Cherkasy')}
            >
              Cherkasy
            </CityNameButton>
          </CityNameItem>
          <CityNameItem>
            <CityNameButton
              type="button"
              onClick={() => handleSmilaWeather('Kyiv')}
            >
              Kyiv
            </CityNameButton>
          </CityNameItem>
          <CityNameItem>
            <CityNameButton
              type="button"
              onClick={() => handleSmilaWeather('Lviv')}
            >
              Lviv
            </CityNameButton>
          </CityNameItem>
          <CityNameItem>
            <CityNameButton
              type="button"
              onClick={() => handleSmilaWeather('Moscow')}
            >
              Moscow
            </CityNameButton>
          </CityNameItem>
          <CityNameItem>
            <CityNameButton
              type="button"
              onClick={() => handleSmilaWeather('Saint Petersburg')}
            >
              Saint Petersburg
            </CityNameButton>
          </CityNameItem>
          <CityNameItem>
            <CityNameButton
              type="button"
              onClick={() => handleSmilaWeather('Secaucus')}
            >
              Secaucus
            </CityNameButton>
          </CityNameItem>
          <CityNameItem>
            <CityNameButton
              type="button"
              onClick={() => handleSmilaWeather('London')}
            >
              London
            </CityNameButton>
          </CityNameItem>
          <CityNameItem>
            <CityNameButton
              type="button"
              onClick={() => handleSmilaWeather('Poteau')}
            >
              Poteau
            </CityNameButton>
          </CityNameItem>
          <CityNameItem>
            <CityNameButton
              type="button"
              onClick={() => handleSmilaWeather('New York')}
            >
              New York
            </CityNameButton>
          </CityNameItem>
        </CitiesList>
      </CitiesWrapper>
    </>
  );
};

export default SearchCityWeatherForm;
