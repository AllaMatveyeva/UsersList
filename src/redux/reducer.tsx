import { AnyAction } from "redux";
import { User } from "../interfaces";

// export interface Geo {
//   lat: string;
//   lng: string;
// }

// export interface Address {
//   street: string;
//   suite: string;
//   city: string;
//   zipcode: string;
//   geo: Geo;
// }

// export interface Company {
//   name: "";
//   catchPhrase: "";
//   bs: "";
// }

// export interface User {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
//   address: Address;
//   phone: string;
//   website: string;
//   company: Company;
// }

interface UsersState {
  users: Array<User>;
  status: "idle" | "pending" | "succeeded" | "failed" | "loading";
  error: string | null;
  strState: {
    nameStr: string;
    usernameStr: string;
    emailStr: string;
  };
}

const initialState = {
  users: [],
  status: "idle",
  error: null,
  strState: {
    nameStr: "",
    usernameStr: "",
    emailStr: "",
  },
} as UsersState;

let usersAll: Array<User>;

export function users(state = initialState, action: AnyAction) {
  switch (action.type) {
    case "UsersMade": {
      usersAll = action.payload;
      return {
        ...state,
        users: action.payload,
      };
    }
    case "UsersLoad": {
      return {
        ...state,
        status: action.payload,
      };
    }

    case "UsersGot": {
      return {
        ...state,
        status: action.payload,
      };
    }

    case "UsersError": {
      return {
        ...state,
        status: action.payload,
      };
    }

    case "UserDelete": {
      const usersFilter = state.users.filter(
        (user) => user.id !== action.payload
      );
      return {
        ...state,
        users: usersFilter,
      };
    }
    case "FilterReset": {
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
    case "FilterUsers": {
      let nameFilter;
      let usernamelFilter;
      let emailFilter;

      const payload = action.payload
        ? action.payload[0].toUpperCase() + action.payload.slice(1)
        : "";
      nameFilter = usersAll.filter((user) => user.name.startsWith(payload));
      usernamelFilter = usersAll.filter((user) =>
        user.username.startsWith(payload)
      );
      emailFilter = usersAll.filter((user) =>
        user.email.startsWith(payload)
      );

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
    default:
      return initialState;
  }
}
