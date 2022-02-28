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

export const updateCurrentNote = (payload: noteInterface) => (
    {
        type: ACTION_TYPES.updateCurrentNote_actionType,
        payload
    }
)

export const setNumberOfLines = (payload: number) => (
    {
        type: ACTION_TYPES.setNumberOfLines_actionType,
        payload
    }
)

export const setFontClass