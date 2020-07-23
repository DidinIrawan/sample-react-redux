const initialState={
    counter:0
}
const reducer = (state=initialState,action)=>{
    switch (action.type) {
        case "ADDITION":
            return { ...state, counter: Number(action.inputOne) + Number(action.inputTwo)}
        case "SUBTRACTION":
            return { ...state, counter: Number(action.inputOne) - Number(action.inputTwo)}
        case "MULTIPLICATION":
            return { ...state, counter: Number(action.inputOne) * Number(action.inputTwo)}
        case "DEVISION":
            return { ...state, counter: Number(action.inputOne) / Number(action.inputTwo)}
        default:
            return state
    }
}
export default reducer;