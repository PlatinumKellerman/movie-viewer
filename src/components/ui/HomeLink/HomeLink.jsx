import { GoBackLink } from './HomeLink.styled';
import { useLocation } from 'react-router-dom';

export const HomeLink = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movie-viewer';
  return (
    <>
      <GoBackLink to={backLinkHref}>
        {'<-'} {''} Go Back
      </GoBackLink>
    </>
  );
};
