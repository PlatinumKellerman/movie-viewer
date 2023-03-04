import styled from 'styled-components';

export const Poster = styled.img`
  width: auto;
`;

export const MovieTitle = styled.h3`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.light};
  text-shadow: ${p => p.theme.colors.grey} 1px 0px 0px,
    ${p => p.theme.colors.dark} 0px 1px 0px,
    ${p => p.theme.colors.dark} 0px -1px 0px,
    ${p => p.theme.colors.dark} -1px 0px 0px;
`;

export const InfoParams = styled.p`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.light};
  text-shadow: ${p => p.theme.colors.grey} 1px 0px 0px,
    ${p => p.theme.colors.dark} 0px 1px 0px,
    ${p => p.theme.colors.dark} 0px -1px 0px,
    ${p => p.theme.colors.dark} -1px 0px 0px;
`;

export const InfoValue = styled.span`
  display: block;
  padding-left: 50px;
`;
