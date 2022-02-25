import { noteInterface } from "../../utils";
import { setCurrentNote_actionType, updateCurrentNote_actionType } from "../actions/actionTypes";
import { defaultNote } from "../../utils";

const currentNote_reducer = (state = defaultNote, action : {type: string, payload: noteInterface}) => {
    switch(action.type){
        case setCurrentNote_actionType:    return {...action.payload};
        case updateCurrentNote_actionType:    return {...action.payload};
        default: return state;
    }
}

export default currentNote_reducer; 