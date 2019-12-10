import { combineReducers } from 'redux';
import sessionReducer from '../reducers/session_reducer';
// import entitiesReducer from '../reducers/entities_reducer';
// import sessionErrorsReducer from '../reducers/session_errors_reducer';

const RootReducer = combineReducers({
  session: sessionReducer,
  // entities: entitiesReducer,
  // sessionErrors: sessionErrorsReducer
})

export default RootReducer;