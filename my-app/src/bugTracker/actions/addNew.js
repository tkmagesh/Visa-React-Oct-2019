import bugApi from '../services/bugApi';

export function addNew(bugName){
    return async function(dispatch){
        let newBugData = { id : 0, name : bugName, isClosed : false, createdAt : new Date() };
        let newBug = await bugApi.save(newBugData);
        let action = { type : 'ADD_NEW', payload : newBug };
        dispatch(action);
    }
}

