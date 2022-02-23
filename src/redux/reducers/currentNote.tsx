import { noteInterface } from "../../utils";
import { setCurrentNote_actionType } from "../actions/actionTypes";

const currentNote_reducer = (state = null, action : {type: string, payload: noteInterface}) => {
    switch(action.type){
        case setCurrentNote_actionType:    return action.payload;
        default: return state;
    }
}

export default currentNote_reducer; 