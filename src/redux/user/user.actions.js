//action creator - function which is called instead of setState

export const setCurrentUser = user => ({
    type: "SET_CURRENT_USER",
    payload: user
})