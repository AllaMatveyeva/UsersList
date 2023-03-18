export const deleteUser = (payload: number) => ({
    type: "UserDelete",
    payload: payload
})

export const reseteFilter = () => ({
    type: "FilterReset",
    
})
