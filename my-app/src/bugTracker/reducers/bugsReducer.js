export function bugsReducer(currentState = [], action){
    switch (action.type) {
        case 'ADD_NEW':
            var newState = [...currentState, action.payload];
            return newState;
            break;
        case 'REPLACE':
            var {oldBug, newBug} = action.payload;
            var newState = currentState.map(bug => bug === oldBug ? newBug : bug );
            return newState;

        case 'REPLACE_ALL':
            var bugsToReplace = action.payload;
            var newState = currentState.filter(bug => bugsToReplace.indexOf(bug) === -1);
            return newState;
        default:
            return currentState;
    }
}