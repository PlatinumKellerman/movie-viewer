import { Link } from 'react-router-dom';
import {
  HeaderBar,
  HeaderLogo,
  SearchMovieLogo,
  HeaderTitle,
  // UserNavWrapper,
  TitleWrapper,
  // SearchMovieLink,
} from './Header.styled';

const Header = () => {
  return (
    <HeaderBar>
      <Link to={'/movie-viewer'} title="Back to Homepage">
        <HeaderLogo />
      </Link>
      <TitleWrapper>
        <HeaderTitle>Movie Finder</HeaderTitle>
      </TitleWrapper>
      <Link to={`/movie-viewer/search`} title="Search movie by name">
        <SearchMovieLogo />
      </Link>
      {/* <UserNavWrapper>User</UserNavWrapper> */}
    </HeaderBar>
  );
};

export default Header;
