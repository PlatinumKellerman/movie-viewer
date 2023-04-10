import styled from 'styled-components';

export const Item = styled.li``;

export const PosterWrapper = styled.div`
  color: ${p => p.theme.colors.light};
  transition-duration: 250ms;
  transition-property: all;
  &:hover,
  &:focus,
  &:active {
    color: ${p => p.theme.colors.primary};
    transform: scale(1.03);
  }
`;

export const Poster = styled.img`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5px;
  border-radius: 10px;
  max-width: 150px;
  height: auto;
`;

export const ShowTitle = styled.p`
  text-align: center;
  margin-bottom: 5px;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.s};
  text-shadow: ${p => p.theme.colors.dark} 1px 0px 0px,
    ${p => p.theme.colors.dark} 0px 1px 0px,
    ${p => p.theme.colors.dark} 0px -1px 0px,
    ${p => p.theme.colors.dark} -1px 0px 0px;
`;
