import isCreatingNote_reducer from "./isCreatingNote_reducer";
import notesList_reducer from "./notesList_reducer";
import currentNote_reducer from "./currentNote_reducer";
import setNumberOfLines from "./numberOfLines_reducer";
import fontClass_reducer from "./fontClass_reducer";
import settings_reducer from "./settings_reducer";
import { combineReducers } from "redux";

const allReducers: any = combineReducers({
    isCreatingNote: isCreatingNote_reducer,
    notesList: notesList_reducer,
    currentNote: currentNote_reducer,
    numberOfLines: setNumberOfLines,
    fontClass: fontClass_reducer,
    settings: settings_reducer
})

export default allReducers;