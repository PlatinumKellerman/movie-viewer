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
  CityName,
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
        <CityName>Ukraine: </CityName>
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
              onClick={() => handleSmilaWeather('Kharkiv')}
            >
              Kharkiv
            </CityNameButton>
          </CityNameItem>
          <CityNameItem>
            <CityNameButton
              type="button"
              onClick={() => handleSmilaWeather('Odesa')}
            >
              Odesa
            </CityNameButton>
          </CityNameItem>
          <CityNameItem>
            <CityNameButton
              type="button"
              onClick={() => handleSmilaWeather('Donetsk')}
            >
              Donetsk
            </CityNameButton>
          </CityNameItem>
          <CityNameItem>
            <CityNameButton
              type="button"
              onClick={() => handleSmilaWeather('Zaporizhzhia')}
            >
              Zaporizhzhia
            </CityNameButton>
          </CityNameItem>
          <CityNameItem>
            <CityNameButton
              type="button"
              onClick={() => handleSmilaWeather('Vinnytsya')}
            >
              Vinnytsya
            </CityNameButton>
          </CityNameItem>
          <CityNameItem>
            <CityNameButton
              type="button"
              onClick={() => handleSmilaWeather('Zhytomyr')}
            >
              Zhytomyr
            </CityNameButton>
          </CityNameItem>
          <CityNameItem>
            <CityNameButton
              type="button"
              onClick={() => handleSmilaWeather('Ivano-Frankivsk')}
            >
              Ivano-Frankivsk
            </CityNameButton>
          </CityNameItem>
          <CityNameItem>
            <CityNameButton
              type="button"
              onClick={() => handleSmilaWeather('Kropyvnytskyi')}
            >
              Kropyvnytskyi
            </CityNameButton>
          </CityNameItem>
          <CityNameItem>
            <CityNameButton
              type="button"
              onClick={() => handleSmilaWeather('Zhitomir')}
            >
              Zhitomir
            </CityNameButton>
          </CityNameItem>
          <CityNameItem>
            <CityNameButton
              type="button"
              onClick={() => handleSmilaWeather('Zhitomir')}
            >
              Zhitomir
            </CityNameButton>
          </CityNameItem>
          <CityNameItem>
            <CityNameButton
              type="button"
              onClick={() => handleSmilaWeather('Zhitomir')}
            >
              Zhitomir
            </CityNameButton>
          </CityNameItem>
        </CitiesList>
      </CitiesWrapper>
    </>
  );
};

export default SearchCityWeatherForm;
