import styled from 'styled-components';

export const List = styled.ul`
  width: 100%;
  display: grid;
  max-width: calc(100vw - 90px);
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  list-style: none;
`;

export const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Poster = styled.img`
  max-width: 300px;
  height: 450px;
  object-fit: fill;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    transform: scale(1.03);
  }
  border-radius: 20px;
`;
