import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Container from 'layout/common/Container/Container';
import { Link } from 'react-router-dom';
import {
  Item,
  PosterWrapper,
  Poster,
  ShowTitle,
} from './PopularTvShows.styled';

const PopularTvShows = ({ shows, location }) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 700,
    slidesToShow: 8,
    slidesToScroll: 1,
    accessibility: false,
    adaptiveHeight: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 2500,
    centerMode: true,
    centerPadding: '5px',
    cssEase: 'ease-in-out',
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Container>
      <Slider {...settings}>
        {shows.map(({ id, name, poster_path, first_air_date }) => (
          <Item key={id}>
            <Link
              to={`/movie-viewer/tv-shows/${id}`}
              state={{ from: location }}
            >
              <PosterWrapper>
                <Poster
                  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                  alt={name}
                ></Poster>
                <ShowTitle>{name}</ShowTitle>
                <ShowTitle>
                  {new Date(first_air_date).getUTCFullYear()}
                </ShowTitle>
              </PosterWrapper>
            </Link>
          </Item>
        ))}
      </Slider>
    </Container>
  );
};

export default PopularTvShows;
