import { User } from "./reducer"

export const makeUsers = (payload: Array<User>) => ({
    type: "UsersMade",
    payload: payload
})

export const deleteUser = (payload: number) => ({
    type: "UserDelete",
    payload: payload
})

export const resetFilter = (payload: void) => ({
    type: "FilterReset",
    payload: payload
    
})

export const usersFilter = (payload: string) => ({
    type: "FilterUsers",
    payload: payload
})

export const loadingStatus = (payload: string) => ({
    type: "UsersLoad",
    payload: payload
})

export const successStatus = (payload: string) => ({
    type: "UsersGot",
    payload: payload
})

export const errorStatus = (payload: string) => ({
    type: "UsersError",
    payload: payload
})







