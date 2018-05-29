import { combineReducers } from 'redux';
import session from './sessionReducer';
import geolocation from './geolocationReducer';
import forecast from './forecastReducer';
import extended from './extendedForecastReducer';

const rootReducer = combineReducers({
  session,
  geolocation,
  forecast,
  extended
});

export default rootReducer;
