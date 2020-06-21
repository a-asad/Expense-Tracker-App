export const transReducer = (state,action)=>{
    switch(action.type)
    {
        case "add":
            return [action.data, ...state]
        case "remove":
            return state.splice(action.delIndex,1);
        default:
            return state;
    }
}