import { applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { userReducer } from './features/user';

const { createStore } = require('redux');

export const store = createStore(
  combineReducers({
    users: userReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
