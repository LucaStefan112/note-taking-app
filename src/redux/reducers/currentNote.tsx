import { noteInterface } from "../../utils";
import { setCurrentNote_actionType, updateCurrentNote_actionType } from "../actions/actionTypes";

const defaultState: noteInterface = {
    id: -1,
    name: '',
    content: ''
}

const currentNote_reducer = (state = defaultState, action : {type: string, payload: noteInterface}) => {
    switch(action.type){
        case setCurrentNote_actionType:    return {...action.payload};
        case updateCurrentNote_actionType:    return {...action.payload};
        default: return state;
    }
}

export default currentNote_reducer; 