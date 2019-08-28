const initialState = []

export default (state = initialState, action) => {

    switch(action.type){
        case "SET_PLAYERCARD":
        return action.playercard

        // case "ADD_ENTRY":
        // return state.concat(action.entry)

        case "UPDATE_PLAYERCARD":
        return state.map(playercard => playercard.id === action.playercard.id ? action.playercard : playercard)

        // case "DELETE_ENTRY_SUCCESS":
        // return state.filter(entry => entry.id === action.entryId ? false : true)

        case "CLEAR_PLAYERCARD":
        return initialState

        
        default:
            return state;
    } 
}