import {
  HeaderBar,
  HeaderLogo,
  SearchMovieLogo,
  HeaderTitle,
  // UserNavWrapper,
  TitleWrapper,
  SearchMovieLink,
  MainLogoLink,
  HeaderLinksWrapper,
} from './Header.styled';

const Header = () => {
  return (
    <HeaderBar>
      <HeaderLinksWrapper>
        <MainLogoLink to={'/movie-viewer'} title="Back to Homepage">
          <HeaderLogo />
        </MainLogoLink>
        <SearchMovieLink
          to={`/movie-viewer/search`}
          title="Search movie by name"
        >
          <SearchMovieLogo />
        </SearchMovieLink>
      </HeaderLinksWrapper>
      <TitleWrapper>
        <HeaderTitle>Movie Finder</HeaderTitle>
      </TitleWrapper>
      {/* <UserNavWrapper>User</UserNavWrapper> */}
    </HeaderBar>
  );
};

export default Header;
