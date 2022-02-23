const SERVER_ADDRESS = "http://localhost:4123";

export const NOTES = {
    method: 'GET',
    address: SERVER_ADDRESS + '/notes'
}

export const NEW_NOTE = {
    method: 'POST',
    address: SERVER_ADDRESS + '/new-note'
}

export const UPDATE_NOTE = {
    method: 'PUT',
    address: SERVER_ADDRESS + '/update-note'
}

export const REMOVE_NOTE = {
    method: 'DELETE',
    address: SERVER_ADDRESS + '/remove-note'
}
