import { combineReducers } from 'redux';
import session from './sessionReducer';
import settings from './settingsReducer';
import geolocation from './geolocationReducer';
import forecast from './forecastReducer';

const rootReducer = combineReducers({
  session,
  settings,
  geolocation,
  forecast
});

export default rootReducer;
