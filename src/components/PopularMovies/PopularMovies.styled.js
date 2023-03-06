import styled from 'styled-components';

export const List = styled.ul`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  display: grid;
  gap: 30px;
  max-width: calc(100vw - 20px);
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  @media (min-width: ${p => p.theme.breakpoints.values.md}px) {
    max-width: calc(100vw - 90px);
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Poster = styled.img`
  max-width: 300px;
  object-fit: fill;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    transform: scale(1.03);
  }
  border-radius: 20px;
  margin-bottom: 10px;
  @media (min-width: ${p => p.theme.breakpoints.values.md}px) {
    max-width: 300px;
    height: 450px;
  }
`;

export const MovieTitle = styled.p`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.light};
  text-shadow: ${p => p.theme.colors.dark} 1px 0px 0px,
    ${p => p.theme.colors.dark} 0px 1px 0px,
    ${p => p.theme.colors.dark} 0px -1px 0px,
    ${p => p.theme.colors.dark} -1px 0px 0px;
`;

export const ListItem = styled.li`
  margin-bottom: 30px;
  &:last-child {
    margin-bottom: 0px;
  }
`;
