import { Link } from 'react-router-dom';

const AddInfoLinks = ({ location }) => {
  const backLinkHref = location.state?.from ?? '/movies';

  return (
    <>
      <Link to={'cast'} state={{ from: backLinkHref }}>
        Cast
      </Link>
      <Link to="reviews" state={{ from: backLinkHref }}>
        Reviews
      </Link>
    </>
  );
};

export default AddInfoLinks;
