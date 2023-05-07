import styled from 'styled-components';
import { ReactComponent as Sunrise } from '../../assets/sunrise.svg';
import { ReactComponent as Sunset } from '../../assets/sunset.svg';
import { ReactComponent as Cloud } from '../../assets/cloud.svg';
import { ReactComponent as Humidity } from '../../assets/humidity.svg';

export const MainWrapper = styled.div`
  margin: 15px;
  width: 90%;
  border-radius: 20px;
  padding: 15px;
  display: block;
  background-color: ${p => p.theme.colors.muted};
  @media (min-width: ${p => p.theme.breakpoints.values.md}px) {
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
  }
`;

export const WeatherIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const WeatherInfoWrapper = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: ${p => p.theme.fonts.monospace};
`;

export const WeatherIcon = styled.img`
  width: 150px;
`;

export const SunriseIcon = styled(Sunrise)`
  width: 48px;
  height: 48px;
  color: ${p => p.theme.colors.dark};
  margin-right: 15px;
  color: ${p => p.theme.colors.imdb};
`;

export const SunsetIcon = styled(Sunset)`
  width: 48px;
  height: 48px;
  color: ${p => p.theme.colors.dark};
  margin-right: 15px;
  color: ${p => p.theme.colors.accent};
`;

export const CloudIcon = styled(Cloud)`
  color: ${p => p.theme.colors.dark};
  width: 48px;
  height: 48px;
  color: ${p => p.theme.colors.cloud};
  margin-right: 15px;
`;

export const HumidityIcon = styled(Humidity)`
  color: ${p => p.theme.colors.dark};
  width: 48px;
  height: 48px;
  margin-right: 15px;
  color: ${p => p.theme.colors.cloud};
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 0px;
  }
`;

export const InfoWeatherValue = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 0px;
  }
`;

export const CityName = styled.p`
  margin-bottom: 15px;
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.cloud};
`;

export const CurrentTemp = styled.p`
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.accent};
`;

export const FeelTemp = styled.p`
  margin-bottom: 50px;
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const WeatherValue = styled.p`
  margin-bottom: 50px;
  font-size: ${p => p.theme.fontSizes.mm};
`;

export const ForecastWeatherWrapper = styled.div`
  width: auto;
`;
