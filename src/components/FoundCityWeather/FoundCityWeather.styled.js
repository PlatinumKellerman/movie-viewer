import styled from 'styled-components';
import { ReactComponent as Sunrise } from '../../assets/sunrise.svg';
import { ReactComponent as Sunset } from '../../assets/sunset.svg';
import { ReactComponent as Cloud } from '../../assets/cloud.svg';
import { ReactComponent as Humidity } from '../../assets/humidity.svg';
import { ReactComponent as Wind } from '../../assets/wind.svg';

export const MainWrapper = styled.div`
  width: 90%;
  border-radius: 20px;
  padding: 30px;
  display: block;
  background-color: ${p => p.theme.colors.muted};
  @media (min-width: ${p => p.theme.breakpoints.values.md}px) {
    width: auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 95%;
  }
`;

export const WeatherIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const WeatherInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: ${p => p.theme.fonts.monospace};
  margin-bottom: 30px;
  @media (min-width: ${p => p.theme.breakpoints.values.md}px) {
    width: 50%;
    margin-bottom: 0px;
  }
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

export const WindIcon = styled(Wind)`
  color: ${p => p.theme.colors.dark};
  width: 60px;
  height: 60px;
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
  font-size: ${p => p.theme.fontSizes.xl};
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
  text-transform: capitalize;
`;

export const ForecastWeatherWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ForecastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes.s};
`;

export const ForecastItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  &:last-child {
    margin-right: 0px;
  }
  @media (min-width: ${p => p.theme.breakpoints.values.md}px) {
    margin-right: 30px;
  }
`;

export const ForecastWeatherIcon = styled.img`
  margin-left: auto;
  margin-right: auto;
  width: 70px;
  height: 70px;
`;

export const ForecastDate = styled.p`
  text-align: center;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xm};
`;

export const ForecastText = styled.p`
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const ForecastStatus = styled.span`
  color: ${p => p.theme.colors.cloud};
  font-size: ${p => p.theme.fontSizes.xm};
`;

export const ForecastCurrTemp = styled.span`
  color: ${p => p.theme.colors.accent};
  font-size: ${p => p.theme.fontSizes.xm};
`;

export const ForecastTitle = styled.h3`
  text-align: center;
  color: ${p => p.theme.colors.cloud};
  font-size: ${p => p.theme.fontSizes.mm};
  margin-bottom: 20px;
`;
