import Pagination from '@mui/material/Pagination';
import { Box } from '@mui/system';
import { useState } from 'react';

const MoviePagination = ({ movies }) => {
  const [page, setPage] = useState(1);

  const moviesPerPage = 20;
  const pageCount = movies.length / moviesPerPage;
  const offset = page * moviesPerPage;

  const handleChange = (event, page) => {
    setPage(page);
  };

  const dataToShow = movies.slice(offset, offset + moviesPerPage);

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      {dataToShow.map(({ id, fullTitle, title, image }) => (
        <div key={id}>{title}</div>
      ))}

      <h1>Current page is {page}</h1>

      <Pagination
        count={movies.length}
        color="primary"
        onChange={handleChange}
      />
    </Box>
  );
};

export default MoviePagination;
