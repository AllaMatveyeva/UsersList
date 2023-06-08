import { AnyAction } from "redux";
import { User } from "../interfaces";
import {
  FetchDataActionTypes,
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  RESET_FILTER,
  USERS_FILTER,
  USERS_Reoder,
  USER_DELETE,
  USER_REMOVE_BY_DRAG,
} from "./actions";


interface UsersState {
  users: Array<User>;
  loading: boolean;
  error: string | null;
  strState: {
    nameStr: string;
    usernameStr: string;
    emailStr: string;
  };
}

const initialState = {
  users: [],
  loading: false,
  error: null,
  strState: {
    nameStr: "",
    usernameStr: "",
    emailStr: "",
  },
} as UsersState;

let usersAll: Array<User>;

export const dataReducer = (
  state = initialState,
  action: FetchDataActionTypes
): UsersState => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DATA_SUCCESS:
      usersAll = action.payload;
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case USER_DELETE: {
      const usersFilter = state.users.filter(
        (user) => user.id !== action.payload
      );
      return {
        ...state,
        users: usersFilter,
      };
    }
    case RESET_FILTER: {
      return {
        ...state,
        users: usersAll,
        strState: {
          nameStr: "",
          usernameStr: "",
          emailStr: "",
        },
      };
    }
    case USERS_FILTER: {
      let nameFilter;
      let usernamelFilter;
      let emailFilter;

      const payload = action.payload
        ? action.payload[0].toUpperCase() + action.payload.slice(1)
        : "";
      nameFilter = usersAll?.filter((user) => user.name.startsWith(payload));
      usernamelFilter = usersAll?.filter((user) =>
        user.username.startsWith(payload)
      );
      emailFilter = usersAll?.filter((user) => user.email.startsWith(payload));

      return {
        ...state,
        users: action.payload
          ? [...nameFilter, ...usernamelFilter, ...emailFilter]
          : usersAll,
        strState: {
          nameStr: nameFilter.length > 0 ? payload : "",
          usernameStr: usernamelFilter.length > 0 ? payload : "",
          emailStr: emailFilter.length > 0 ? payload : "",
        },
      };
    }
    case USERS_Reoder: {
      const [start, finish] = action.payload;
      const result = state.users;
      const [removed] = result.splice(start, 1);
      result.splice(finish, 0, removed);
      return {
        ...state,
        users: result
      };
    }
    case USER_REMOVE_BY_DRAG: {
      const start = action.payload;
      const result = state.users;
      result.splice(start, 1);
      return {
        ...state,
        users: result
      };
    }
    default:
      return initialState;
  }
};
