import { combineReducers } from 'redux';
import session from './sessionReducer';
import geolocation from './geolocationReducer';
import forecast from './forecastReducer';

const rootReducer = combineReducers({
  session,
  geolocation,
  forecast
});

export default rootReducer;
