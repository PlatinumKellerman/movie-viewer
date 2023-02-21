import { HeaderBar, HeaderLogo } from './Header.styled';

const Header = () => {
  return (
    <HeaderBar>
      <HeaderLogo fontSize="large" />
      <p>Movie Finder</p>
      <div>User</div>
    </HeaderBar>
  );
};

export default Header;
