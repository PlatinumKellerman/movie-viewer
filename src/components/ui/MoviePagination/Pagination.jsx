import Pagination from '@mui/material/Pagination';
import { Box } from '@mui/system';
import { useState } from 'react';

const MoviePagination = ({ movies }) => {
  const [page, setPage] = useState(1);

  const moviesPerPage = 20;
  const pageCount = movies.length / moviesPerPage;

  const handleChange = (event, page) => {
    console.log(event, page);
    setPage(page);
  };

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
    >
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
