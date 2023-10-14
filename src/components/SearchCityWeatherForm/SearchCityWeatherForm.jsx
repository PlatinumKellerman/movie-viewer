import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useMediaQuery } from 'react-responsive';
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
  UaMenuButton,
  UsaMenuButton,
  MenuWrapper,
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

  const isMobile = useMediaQuery({ maxWidth: 768 });

  const [anchorElUa, setAnchorElUa] = React.useState(null);
  const openUa = Boolean(anchorElUa);
  const handleClickUa = event => {
    setAnchorElUa(event.currentTarget);
  };
  const handleCloseUa = () => {
    setAnchorElUa(null);
  };
  const handleMenuClickUa = (event, option) => {
    if (event.currentTarget) {
      setAnchorElUa(event.currentTarget);
    }
    handleCityWeather(option);
  };

  const [anchorElUsa, setAnchorElUsa] = React.useState(null);
  const openUsa = Boolean(anchorElUsa);
  const handleClickUsa = event => {
    setAnchorElUsa(event.currentTarget);
  };
  const handleCloseUsa = () => {
    setAnchorElUsa(null);
  };
  const handleMenuClickUsa = (event, option) => {
    if (event.currentTarget) {
      setAnchorElUsa(event.currentTarget);
    }
    handleCityWeather(option);
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
      <div>
        {isMobile ? (
          <div>
            {
              <MenuWrapper>
                <div>
                  <UaMenuButton
                    aria-label="more"
                    id="long-button-ua"
                    aria-controls={openUa ? 'long-button-ua' : undefined}
                    aria-expanded={openUa ? 'true' : undefined}
                    aria-haspopup="true"
                    onClick={handleClickUa}
                  >
                    UA
                  </UaMenuButton>
                  <Menu
                    id="long-menu"
                    MenuListProps={{
                      'aria-labelledby': 'long-button',
                    }}
                    anchorEl={anchorElUa}
                    open={openUa}
                    onClose={handleCloseUa}
                    PaperProps={{
                      style: {
                        maxHeight: '40%',
                        width: 'auto',
                        backgroundColor: '#474B4F',
                        color: '#ffffff',
                      },
                    }}
                  >
                    {uaCities.map(option => (
                      <MenuItem
                        key={option}
                        selected={option === 'Pyxis'}
                        onClick={e => {
                          handleMenuClickUa(e, option);
                          handleCloseUa();
                        }}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </Menu>
                </div>
                <div>
                  <UsaMenuButton
                    aria-label="more"
                    id="long-button-usa"
                    aria-controls={openUsa ? 'long-button-usa' : undefined}
                    aria-expanded={openUsa ? 'true' : undefined}
                    aria-haspopup="true"
                    onClick={handleClickUsa}
                  >
                    USA
                  </UsaMenuButton>
                  <Menu
                    id="long-menu"
                    MenuListProps={{
                      'aria-labelledby': 'long-button',
                    }}
                    anchorEl={anchorElUsa}
                    open={openUsa}
                    onClose={handleCloseUsa}
                    PaperProps={{
                      style: {
                        maxHeight: '40%',
                        width: 'auto',
                        backgroundColor: '#474B4F',
                        color: '#ffffff',
                      },
                    }}
                  >
                    {usaStateCapitals.map(option => (
                      <MenuItem
                        key={option}
                        selected={option === 'Pyxis'}
                        onClick={e => {
                          handleMenuClickUsa(e, option);
                          handleCloseUsa();
                        }}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </Menu>
                </div>
              </MenuWrapper>
            }
          </div>
        ) : (
          <CitiesWrapper>
            <CitiesList>
              {uaCities.map(city => (
                <CityNameItem key={city}>
                  <CityNameButton
                    type="button"
                    onClick={() => handleCityWeather(city)}
                  >
                    <UsaCityNameSpan>{city}</UsaCityNameSpan>
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
        )}
      </div>
    </Container>
  );
};

export default SearchCityWeatherForm;
