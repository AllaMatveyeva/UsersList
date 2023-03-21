import { User } from "./reducer"

export const makeUsers = (payload: Array<User>) => ({
    type: "UsersMade",
    payload: payload
})

export const deleteUser = (payload: number) => ({
    type: "UserDelete",
    payload: payload
})

export const reseteFilter = () => ({
    type: "FilterReset",
    
})

export const usersFilter = (payload: string) => ({
    type: "FilterUsers",
    payload: payload
})
