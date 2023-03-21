import  { users } from "./reducer"
import { createStore } from 'redux'


const store = createStore (users);

 export type RootState = ReturnType<typeof store.getState>

 export type AppDispatch = typeof store.dispatch

export default store