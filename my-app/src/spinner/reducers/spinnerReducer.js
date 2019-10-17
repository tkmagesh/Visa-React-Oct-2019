export function spinnerReducer(currentState = 0, action){
	
    //when an action is dispatched
    if (action.type === 'UP') return currentState + action.payload;
    if (action.type === 'DOWN') return currentState - action.payload;
    
    //initializing the store state
    return currentState;
}