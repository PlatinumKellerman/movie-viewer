import { InfoLink, InfoLinkWrapper } from './AddInfoLinks.styled.js';

const AddInfoLinks = ({ location }) => {
  const backLinkHref = location.state?.from ?? '';

  return (
    <InfoLinkWrapper>
      <InfoLink to={'cast'} state={{ from: backLinkHref }}>
        Cast
      </InfoLink>
      <InfoLink to={'reviews'} state={{ from: backLinkHref }}>
        Reviews
      </InfoLink>
    </InfoLinkWrapper>
  );
};

export default AddInfoLinks;
