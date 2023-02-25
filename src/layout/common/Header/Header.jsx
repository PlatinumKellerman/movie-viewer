import {
  HeaderBar,
  HeaderLogo,
  HeaderTitle,
  UserNavWrapper,
  TitleWrapper,
} from './Header.styled';

const Header = () => {
  return (
    <HeaderBar>
      <HeaderLogo />
      <TitleWrapper>
        <HeaderTitle>Movie Finder</HeaderTitle>
      </TitleWrapper>
      <UserNavWrapper>User</UserNavWrapper>
    </HeaderBar>
  );
};

export default Header;
