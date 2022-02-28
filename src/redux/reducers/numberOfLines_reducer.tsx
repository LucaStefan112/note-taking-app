import { setNumberOfLines_actionType } from "../actions/actionTypes";

const setNumberOfLines = (state = 0, action : {type: string, payload: number}) => {
    switch(action.type){
        case setNumberOfLines_actionType:    return action.payload
        default: return state;
    }
}

export default setNumberOfLines; 