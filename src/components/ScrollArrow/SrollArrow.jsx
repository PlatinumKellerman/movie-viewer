import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import Button from '@mui/material/Button';

const ScrollArrow = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginRight: '10px',
      }}
    >
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#61892F',
          '&:hover': {
            backgroundColor: '#E85A4F',
          },
          '&:focus': {
            backgroundColor: '#E85A4F',
          },
        }}
        startIcon={
          <ArrowCircleUpIcon
            sx={{
              fontSize: 'large',
            }}
          />
        }
        onClick={scrollToTop}
      >
        To Top
      </Button>
    </div>
  );
};

export default ScrollArrow;
