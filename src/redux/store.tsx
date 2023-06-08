import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { dataReducer } from './reducer';
import { FetchDataActionTypes } from './actions';


export const rootReducer = combineReducers({
  data: dataReducer
});

export type RootState = ReturnType<typeof rootReducer>;

 const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk as ThunkMiddleware<RootState, FetchDataActionTypes>)
  )
);


export type AppDispatch = typeof store.dispatch;

export default store;
