import isCreatingNote_reducer from "./isCreatingNote";
import { combineReducers } from "redux";

const allReducers :any = combineReducers({
    isCreatingNote: isCreatingNote_reducer
})

export default allReducers;