const isCreatingNote_reducer = (state = false, action : {type: string}) => {
    switch(action.type){
        case 'SWITCH':    return !state;
        default: return state;
    }
}

export default isCreatingNote_reducer; 