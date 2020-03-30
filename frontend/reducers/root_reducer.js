import { combineReducers } from 'redux';
<<<<<<< HEAD
import sessionReducer from '../reducers/session_reducer';
import entitiesReducer from '../reducers/entities_reducer';
import musicPlayerReducer from '../reducers/music_player_reducer';
import errorsReducer from '../reducers/session_errors_reducer';
import uiReducer from '../reducers/ui_reducer';
=======
import sessionReducer from './session_reducer';
import entitiesReducer from './entities_reducer';
import musicPlayerReducer from './music_player_reducer';
import errorsReducer from './session_errors_reducer';
import uiReducer from './ui_reducer';
>>>>>>> 90aa25b34e9f4eee7e1398a3c80f26716c4ca898

const rootReducer = combineReducers({
  session: sessionReducer,
  entities: entitiesReducer,
  musicPlayer: musicPlayerReducer,
  errors: errorsReducer,
  ui: uiReducer
})

export default rootReducer;