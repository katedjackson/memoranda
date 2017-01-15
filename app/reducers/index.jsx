import { combineReducers } from 'redux'
import noteReducer from './note-reducer'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  notes: noteReducer,
  form: formReducer
})

export default rootReducer
