import styled from 'styled-components';

export const NotFoundWrapper = styled.div`
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1200px;
  background-color: ${p => p.theme.colors.darkGrey};
  padding: 100px;
  margin-top: 50px;
  border-radius: 10px;
`;

export const NotFoundNavWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 60px;
`;

export const NotFoundMessage = styled.p`
  font-family: ${p => p.theme.fonts.body};
  color: ${p => p.theme.colors.light};
  font-size: ${p => p.theme.fontSizes.xl};
`;
