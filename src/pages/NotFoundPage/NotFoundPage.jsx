import DangerousOutlinedIcon from '@mui/icons-material/DangerousOutlined';
import NotFoundImg from '../../assets/404.jpg';
import HomeLink from '../../components/ui/HomeLink';
import {
  NotFoundWrapper,
  NotFoundNavWrapper,
  NotFoundMessage,
} from './NotFoundPage.styled';

const NotFoundPage = () => {
  return (
    <NotFoundWrapper>
      <img
        src={NotFoundImg}
        alt="NotFound"
        style={{
          width: '600px',
          marginLeft: 'auto',
          marginRight: 'auto',
          borderRadius: '10px',
        }}
      ></img>
      <NotFoundNavWrapper>
        <DangerousOutlinedIcon
          sx={{ fontSize: 70, marginRight: '20px', color: 'red' }}
        />
        <NotFoundMessage>Sorry, page not found!</NotFoundMessage>
      </NotFoundNavWrapper>
      <HomeLink />
    </NotFoundWrapper>
  );
};

export default NotFoundPage;
