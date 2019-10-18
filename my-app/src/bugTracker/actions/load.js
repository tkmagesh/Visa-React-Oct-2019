//import axios from 'axios';
/*
export function load(){
    return function(dispatch){
        axios
            .get('http://localhost:3030/bugs')
            .then(response => response.data)
            .then(bugs => {
                let action = { type : 'LOAD', payload : bugs};
                dispatch(action);
            });
    }
}
*/
/*
export function load(){
    return async function(dispatch){
        let response = await axios.get('http://localhost:3030/bugs');
        let bugs = response.data;
        let action = { type : 'LOAD', payload : bugs};
        dispatch(action);
    }
}
*/

import bugApi from '../services/bugApi';

export function load(){
    return async function(dispatch){
        let bugs = await bugApi.getAll();
        let action = { type : 'LOAD', payload : bugs};
        dispatch(action);
    }
}