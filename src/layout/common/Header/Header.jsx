import Media from 'react-media';
import {
  HeaderBar,
  HeaderLogo,
  SearchMovieLogo,
  HeaderTitle,
  // UserNavWrapper,
  TitleWrapper,
  SearchMovieLink,
  MainLogoLink,
  WeatherLogo,
  LeafsLeftPic,
  GrassIco,
  // HeaderLinksWrapper,
} from './Header.styled';

const Header = () => {
  return (
    <HeaderBar>
      <MainLogoLink to={'/movie-viewer'} title="Back to Homepage">
        <HeaderLogo />
      </MainLogoLink>
      <SearchMovieLink to={`/movie-viewer/search`} title="Search movie by name">
        <SearchMovieLogo />
      </SearchMovieLink>
      <Media
        query="(min-width: 520px)"
        render={() => (
          <TitleWrapper>
            {' '}
            <GrassIco />
            <HeaderTitle>Movie Finder</HeaderTitle>
            <LeafsLeftPic />
          </TitleWrapper>
        )}
      ></Media>
      <MainLogoLink to={`/movie-viewer/weather`} title="Weather page">
        <WeatherLogo />
      </MainLogoLink>
      {/* <UserNavWrapper>User</UserNavWrapper> */}
    </HeaderBar>
  );
};

export default Header;
