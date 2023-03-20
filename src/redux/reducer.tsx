import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getUsers } from "../api";
import store from "./store";


export interface Geo {
  lat: string
      lng: string
 }

export interface Address {
  street: string
    suite: string
    city: string
    zipcode: string
    geo: Geo
}

export interface Company {
  name: ""
  catchPhrase: ""
  bs: ""
}

export interface User {
id: number,
name: string
username: string
email: string
address: Address
phone: string
website: string
company: Company
}  

interface UsersState {
    users: Array<User>,
    status: 'idle' | 'pending' | 'succeeded' | 'failed'|"loading",
    error: string | null,
    strState: {
      nameStr: string,
    usernameStr: string,
    emailStr: string
    }
  };
 
  

const initialState = { 
    users: [], 
    status: "idle",
    error: null,
    strState: {
      nameStr: "",
      usernameStr: "",
      emailStr: ""
    }

} as UsersState;


 export function usersReducer (state = initialState, action: PayloadAction<number>) {
switch (action.type){
case "UserDelete": {
const usersFilter= (state.users).filter((user)=>user.id !== action.payload)
    return {
...state,
users: usersFilter,
}
}
case "FilterReset": {
  
      return {
  ...state,
  users: usersAll,
  }
  }
default:
    return initialState;
}

};

let usersAll: Array<User>;

export const fetchUsers = createAsyncThunk ("users/fetchUsers", async () => {
const response = await getUsers();
usersAll = response.data;
return response.data;
});

 const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
      userDelete:  {
        reducer (state, action: PayloadAction<any>) {
        const usersFilter= (state.users).filter((user)=>user.id !== action.payload);
        state.users = usersFilter
        },
        prepare (id: number) {
return {
  payload: id
  
}
        }
      },
      userFilter:  {
        reducer (state, action: PayloadAction<any>) {
          state.strState.nameStr = "";
          state.strState.usernameStr = "";
          state.strState.emailStr = "";
          const payload = action.payload[0].toUpperCase() + action.payload.slice(1);
         const nameFilter= (state.users).filter((user)=>user.name.startsWith(payload));
        const usernamelFilter= (state.users).filter((user)=>user.username.startsWith(payload));
        const emailFilter= (state.users).filter((user)=>user.email.startsWith(payload));
      state.users = [...nameFilter, ...usernamelFilter, ...emailFilter];
       if (nameFilter.length > 0) {
        state.strState.nameStr = payload
       };
       if (nameFilter) {
        state.strState.usernameStr = payload
       };
       if (nameFilter) {
        state.strState.emailStr = payload
       };
        },
        prepare (value: string) {
return {
  payload: value
  
}
        }
      },
      filterReset:  {
        reducer (state, action: PayloadAction<void>) {
        state.users = usersAll
        },
        prepare () {
return {
  payload: undefined
  
}
        }
      }
    },
    extraReducers(builder) {
      builder
        .addCase(fetchUsers.pending, (state, action: PayloadAction<string | undefined>) => {
          state.status = 'loading'
        })
        .addCase(fetchUsers.fulfilled, (state,  action: PayloadAction<Array<User>>) => {
          state.status = 'succeeded'
          // Add any fetched posts to the array
          state.users = action.payload;
        })
        .addCase(fetchUsers.rejected, (state, action: PayloadAction<any>) => {
          state.status = 'failed'
          state.error = action.payload
        })
    }
  })

  export const { userDelete } = usersSlice.actions;
  export const { filterReset } = usersSlice.actions;
  export const { userFilter } = usersSlice.actions;
  export default usersSlice.reducer
  //store.dispatch(usersSlice )