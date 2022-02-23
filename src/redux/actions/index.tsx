import * as ACTION_TYPES from './actionTypes'
import { noteInterface } from '../../utils'

export const switchisCreatingNote = () => (
    {
        type: ACTION_TYPES.switchisCreatingNote_actionType
    }
)

export const setNotesList = (payload: noteInterface[]) => (
    {
        type: ACTION_TYPES.setNotesList_actionType,
        payload
    }
)

export const setCurrentNote = (payload: noteInterface) => (
    {
        type: ACTION_TYPES.setCurrentNote_actionType,
        payload
    }
)