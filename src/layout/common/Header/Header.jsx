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
      <TitleWrapper>
        <HeaderTitle>Movie Finder</HeaderTitle>
      </TitleWrapper>
      <MainLogoLink to={`/movie-viewer/weather`} title="Weather page">
        <WeatherLogo />
      </MainLogoLink>
      {/* <UserNavWrapper>User</UserNavWrapper> */}
    </HeaderBar>
  );
};

export default Header;
