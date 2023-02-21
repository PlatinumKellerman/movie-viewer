import styled from 'styled-components';
import LiveTvIcon from '@mui/icons-material/LiveTv';

export const HeaderBar = styled.header`
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgb(27, 50, 27);
  background: linear-gradient(
    90deg,
    rgba(27, 50, 27, 1) 0%,
    rgba(224, 90, 0, 1) 53%,
    rgba(27, 50, 27, 1) 100%
  );
`;

export const HeaderLogo = styled(LiveTvIcon)`
  color: ${p => p.theme.colors.white};
`;
