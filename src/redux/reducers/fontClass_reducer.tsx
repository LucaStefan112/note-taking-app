import { setFontClass_actionType } from "../actions/actionTypes";

const fontClass_reducer = (state = 'font--roboto', action : {type: string, payload: string}) => {
    switch(action.type){
        case setFontClass_actionType:    return action.payload
        default: return state;
    }
}

export default fontClass_reducer; 