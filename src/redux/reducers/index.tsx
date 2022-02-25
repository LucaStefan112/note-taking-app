import isCreatingNote_reducer from "./isCreatingNote";
import notesList_reducer from "./notesList";
import currentNote_reducer from "./currentNote";
import setNumberOfLines from "./numberOfLines";
import { combineReducers } from "redux";

const allReducers: any = combineReducers({
    isCreatingNote: isCreatingNote_reducer,
    notesList: notesList_reducer,
    currentNote: currentNote_reducer,
    numberOfLines: setNumberOfLines
})

export default allReducers;