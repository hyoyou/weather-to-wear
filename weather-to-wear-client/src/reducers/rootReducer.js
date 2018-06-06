import { combineReducers } from 'redux';
import session from './sessionReducer';
import forecast from './forecastReducer';

const rootReducer = combineReducers({
  session,
  forecast
});

export default rootReducer;
