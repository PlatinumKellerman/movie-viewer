import styled from 'styled-components';

export const CastWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.light};
  text-shadow: ${p => p.theme.colors.dark} 1px 0px 0px,
    ${p => p.theme.colors.dark} 0px 1px 0px,
    ${p => p.theme.colors.dark} 0px -1px 0px,
    ${p => p.theme.colors.dark} -1px 0px 0px;
  transition-duration: 250ms;
  transition-property: color;
  &:hover,
  &:focus,
  &:active {
    color: ${p => p.theme.colors.primary};
  }
`;

export const CastList = styled.ul`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  gap: 30px;
  max-width: calc(100vw - 20px);
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  @media (min-width: ${p => p.theme.breakpoints.values.md}px) {
    max-width: calc(100vw - 90px);
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`;

export const CastListItem = styled.li`
  margin-left: auto;
  margin-right: auto;
`;

export const Photo = styled.img`
  max-width: 300px;
  object-fit: fill;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus,
  &:active {
    transform: scale(1.02);
  }
  border-radius: 50px;
  margin-bottom: 10px;
  @media (min-width: ${p => p.theme.breakpoints.values.md}px) {
    max-width: 300px;
    height: 450px;
  }
`;

export const ActorPlug = styled.img`
  max-width: 300px;
  object-fit: fill;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus,
  &:active {
    transform: scale(1.01);
  }
  border-radius: 50px;
  margin-bottom: 10px;
  @media (min-width: ${p => p.theme.breakpoints.values.md}px) {
    max-width: 300px;
    height: 450px;
  }
`;
