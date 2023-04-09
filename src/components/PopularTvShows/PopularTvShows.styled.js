import styled from 'styled-components';

export const Item = styled.li``;

export const PosterWrapper = styled.div``;

export const Poster = styled.img`
  border-radius: 10px;
  width: 150px;
  height: auto;
  margin-bottom: 5px;
`;

export const ShowTitle = styled.p`
  text-align: center;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.light};
  text-shadow: ${p => p.theme.colors.dark} 1px 0px 0px,
    ${p => p.theme.colors.dark} 0px 1px 0px,
    ${p => p.theme.colors.dark} 0px -1px 0px,
    ${p => p.theme.colors.dark} -1px 0px 0px;
`;
