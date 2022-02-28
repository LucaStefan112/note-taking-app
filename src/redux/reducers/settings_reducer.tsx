import { switchSettings_actionType } from "../actions/actionTypes";

const settings_reducer = (state = false, action : {type: string}) => {
    switch(action.type){
        case switchSettings_actionType:    return !state;
        default: return state;
    }
}

export default settings_reducer; 