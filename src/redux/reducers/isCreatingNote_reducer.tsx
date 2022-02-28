import { switchisCreatingNote_actionType } from "../actions/actionTypes";

const isCreatingNote_reducer = (state = false, action : {type: string}) => {
    switch(action.type){
        case switchisCreatingNote_actionType:    return !state;
        default: return state;
    }
}

export default isCreatingNote_reducer; 