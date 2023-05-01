import styled from 'styled-components';
import { ReactComponent as Sunrise } from '../../assets/sunrise.svg';
import { ReactComponent as Sunset } from '../../assets/sunset.svg';
import { ReactComponent as Cloud } from '../../assets/cloud.svg';
import { ReactComponent as Humidity } from '../../assets/humidity.svg';

export const MainWrapper = styled.div`
  width: auto;
  display: flex;
  background-color: ${p => p.theme.colors.muted};
  margin: 20px;
`;

export const WeatherIconWrapper = styled.div`
  width: auto;
`;

export const WeatherInfoWrapper = styled.div`
  width: auto;
`;

export const WeatherIcon = styled.img`
  width: 128px;
`;

export const SecondaryWeatherInfoWrapper = styled.div`
  width: auto;
`;

export const SunriseIcon = styled(Sunrise)`
  width: 48px;
  height: 48px;
  color: ${p => p.theme.colors.dark};
  margin-right: 15px;
`;

export const SunsetIcon = styled(Sunset)`
  width: 48px;
  height: 48px;
  color: ${p => p.theme.colors.dark};
  margin-right: 15px;
`;

export const CloudIcon = styled(Cloud)`
  color: ${p => p.theme.colors.dark};
  width: 48px;
  height: 48px;
  margin-right: 15px;
`;

export const HumidityIcon = styled(Humidity)`
  color: ${p => p.theme.colors.dark};
  width: 48px;
  height: 48px;
  margin-right: 15px;
`;

export const IconWrapper = styled.p`
  display: flex;
  align-items: center;
`;
