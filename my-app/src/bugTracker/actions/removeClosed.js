import bugApi from '../services/bugApi';
/*
export function removeClosed(bugs){
    let closedBugs = bugs.filter(bug => bug.isClosed);
    let action = { type : 'REPLACE_ALL', payload : closedBugs};
    return action;
}*/

export function removeClosed(bugs){
    return async function(dispatch){
        let closedBugs = bugs.filter(bug => bug.isClosed);
        closedBugs
            .forEach(async closedBug => {
                await bugApi.remove(closedBug);
                let action = { type : 'REMOVE', payload : closedBug};
                dispatch(action);
            });
    }
}