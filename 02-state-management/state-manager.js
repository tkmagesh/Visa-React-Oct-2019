let SM = (function(){
    let _currentState = undefined,
        _subscribers = [],
        _reducer = null,
        _init_action = '@@INIT/ACTION';

    function getState(){
        return _currentState;
    }

    function subscribe(fn){
        _subscribers.push(fn);
    }

    function dispatch(action){
        let newState = _reducer(_currentState, action);
        if ( _currentState === newState ) return;
        _currentState = newState;
        triggerChange();
    }

    function triggerChange(){
        _subscribers.forEach(fn => fn());
    }

    function createStore(reducer){
        _reducer = reducer;
        
        //to initialize the store state with valid initial state
        _currentState = reducer(_currentState, _init_action);

        return { getState, subscribe, dispatch };
    }

    function bindActionCreators(actionCreators, dispatch){
        let actionDispatchers = {};
        for(let key in actionCreators){
            actionDispatchers[key] = function(...args){
                let action = actionCreators[key](...args);
                dispatch(action);
            }
        }
        return actionDispatchers;
    }

    return { createStore, bindActionCreators };
})();