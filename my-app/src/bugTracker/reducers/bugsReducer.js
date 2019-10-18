export function bugsReducer(currentState = [], action){
    switch (action.type) {
        case 'ADD_NEW':
            return [...currentState, action.payload];
        case 'REPLACE':
            let {oldBug, newBug} = action.payload;
            return currentState.map(bug => bug === oldBug ? newBug : bug );
        case 'REPLACE_ALL':
            let bugsToReplace = action.payload;
            return currentState.filter(bug => bugsToReplace.indexOf(bug) === -1);
        case 'REMOVE':
                let bugToReplace = action.payload;
                return currentState.filter(bug => bug.id !== bugToReplace.id);
        case  'LOAD' :
            return action.payload;
        default:
            return currentState;
    }
}