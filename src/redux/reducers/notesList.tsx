import { NotEmittedStatement } from "typescript";
import { noteInterface } from "../../utils";
import { setNotesList_actionType } from "../actions/actionTypes";

const notesList_reducer = (state = [], action : {type: string, payload: noteInterface[]}) => {
    switch(action.type){
        case setNotesList_actionType:    return [...action.payload];
        default: return state;
    }
}

export default notesList_reducer; 