import * as ACTION_TYPES from './actionTypes'

export const switchisCreatingNote = () => (
    {
        type: ACTION_TYPES.switchisCreatingNote_actionType
    }
)

export const setCurrentFile = (
    payload: {
        id: number,
        name: string,
        content: string
    }) => (
    {
        type: ACTION_TYPES.switchisCreatingNote_actionType,
        payload
    }
)