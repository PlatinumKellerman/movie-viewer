// import { Link } from 'react-router-dom';
// import Pagination from '@mui/material/Pagination';
// import { makeStyles } from '@material-ui/core/styles';
// import { Box } from '@mui/system';
// import { useState } from 'react';
// import { List, ImgWrapper, Poster } from './MoviePagination.styled';

// const useStyles = makeStyles(theme => ({
//   root: {
//     '& .Mui-selected': {
//       backgroundColor: '#86C232',
//       color: 'white',
//     },
//     '& .Mui-selected:hover': {
//       backgroundColor: '#61892F',
//     },
//   },
// }));

// const MoviePagination = ({ movies, location }) => {
//   const [page, setPage] = useState(1);
//   const moviesPerPage = 20;
//   const pageCount = movies.length / moviesPerPage - 1;
//   const offset = page * moviesPerPage;

//   const classes = useStyles();

//   const handleChange = (event, page) => {
//     setPage(page);
//   };

//   const dataToShow = movies.slice(offset, offset + moviesPerPage);
//   console.log(movies);
//   return (
//     <Box
//       display={'flex'}
//       flexDirection={'column'}
//       justifyContent={'center'}
//       alignItems={'center'}
//     >
//       <List>
//         {dataToShow.map(({ id, title, poster_path }) => (
//           <li key={id}>
//             <Link to={`/movies/${id}`} state={{ from: location }}>
//               <ImgWrapper>
//                 <Poster src={poster_path} alt={title}></Poster>
//                 <p>{title}</p>
//               </ImgWrapper>
//             </Link>
//           </li>
//         ))}
//       </List>

//       <Pagination
//         style={{ margin: '30px' }}
//         classes={{
//           root: classes.root,
//         }}
//         count={pageCount}
//         onChange={handleChange}
//       />
//     </Box>
//   );
// };

// export default MoviePagination;
