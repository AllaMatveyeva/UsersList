import { Dispatch } from "react";
import { getUsers } from "../api";
import { User } from "../interfaces";


export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const USER_DELETE = 'USER_DELETE';
export const USERS_FILTER = 'USERS_FILTER';
export const USERS_Reoder = 'USERS_Reoder';
export const RESET_FILTER = 'RESET_FILTER';
export const USER_REMOVE_BY_DRAG = "USER_REMOVE_BY_DRAG"


interface FetchDataRequestAction {
  type: typeof FETCH_DATA_REQUEST;
}

interface FetchDataSuccessAction {
  type: typeof FETCH_DATA_SUCCESS;
  payload: any;
}

interface FetchDataFailureAction {
  type: typeof FETCH_DATA_FAILURE;
  payload: any;
}


interface UserDeleteAction {
  type: typeof USER_DELETE;
  payload: number;
}

interface UsersFilterAction {
  type: typeof USERS_FILTER;
  payload: string;
}

interface ResetFilterAction {
  type: typeof RESET_FILTER;
  payload: void;
}

interface UsersReoderAction {
  type: typeof USERS_Reoder;
  payload: Array<number>;
}

interface UserRemoveByDragAction {
  type: typeof USER_REMOVE_BY_DRAG;
  payload: number;
}

export type FetchDataActionTypes =
  | FetchDataRequestAction
  | FetchDataSuccessAction
  | FetchDataFailureAction
  | UserDeleteAction
  | UsersFilterAction
  | ResetFilterAction
  | UsersReoderAction
  | UserRemoveByDragAction



export const fetchDataRequest = ():FetchDataRequestAction => ({
  type: FETCH_DATA_REQUEST
});




export const fetchDataSuccess = (payload: Array<User>):FetchDataSuccessAction => ({
  type: FETCH_DATA_SUCCESS,
  payload:payload
});



export const fetchDataFailure = (error: any):FetchDataFailureAction => ({
  type: FETCH_DATA_FAILURE,
  payload: error
});

export const deleteUser = (payload: number):UserDeleteAction => ({
  type:USER_DELETE,
  payload:payload
});

export const resetFilter = (payload:void):ResetFilterAction => ({
  type:RESET_FILTER,
  payload:payload
});

export const usersFilter = (payload:string):UsersFilterAction => ({
  type:USERS_FILTER,
  payload:payload
});

export const usersReoder = (payload:Array<number>):UsersReoderAction => ({
  type:USERS_Reoder,
  payload:payload
});

export const userRemoveByDrag = (payload:number):UserRemoveByDragAction => ({
  type:USER_REMOVE_BY_DRAG,
  payload:payload
});



export const fetchData = ():any => {
  return async (dispatch: Dispatch<FetchDataActionTypes>) =>  {
    dispatch (fetchDataRequest());
try {
const response = await getUsers();

dispatch(fetchDataSuccess(response.data));
} catch (error) {
  dispatch(fetchDataFailure(error));
}
  }
}