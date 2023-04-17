import styled from 'styled-components';

export const ReviewWrapper = styled.div`
  padding: 10px;
  background-color: ${p => p.theme.colors.dark};
  border-radius: 20px;
  @media (min-width: ${p => p.theme.breakpoints.values.lg}px) {
    padding: 25px;
  }
`;

export const ReviewParams = styled.p`
  margin-bottom: 10px;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.xm};
  color: ${p => p.theme.colors.secondary};
  @media (min-width: ${p => p.theme.breakpoints.values.lg}px) {
    font-size: ${p => p.theme.fontSizes.l};
  }
  &:last-child {
    margin-bottom: 0px;
  }
`;

export const ReviewValue = styled.p`
  letter-spacing: 2px;
  margin-bottom: 20px;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.xs};
  color: ${p => p.theme.colors.grey};
  margin-bottom: 40px;
  @media (min-width: ${p => p.theme.breakpoints.values.lg}px) {
    font-size: ${p => p.theme.fontSizes.m};
  }
`;

export const ReviewItem = styled.li`
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0px;
  }
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 64px;
  height: 64px;
`;

export const AvatarPlug = styled.img`
  border-radius: 50%;
  width: 64px;
  height: 64px;
`;

export const ReviewDate = styled.span`
  margin-left: 15px;
  color: ${p => p.theme.colors.grey};
  font-size: ${p => p.theme.fontSizes.xs};
  @media (min-width: ${p => p.theme.breakpoints.values.lg}px) {
    font-size: ${p => p.theme.fontSizes.m};
  }
`;
