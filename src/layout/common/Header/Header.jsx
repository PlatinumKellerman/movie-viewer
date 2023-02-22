import {
  HeaderBar,
  HeaderLogo,
  HeaderTitle,
  UserNavWrapper,
} from './Header.styled';

const Header = () => {
  return (
    <HeaderBar>
      <HeaderLogo />
      <HeaderTitle>Movie Finder</HeaderTitle>
      <UserNavWrapper>User</UserNavWrapper>
    </HeaderBar>
  );
};

export default Header;
