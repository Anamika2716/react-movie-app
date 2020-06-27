import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './components/App';
import rootReducer from './reducers';


//curried form of function logger (obj, next,action)

//redux call logger as logger(obj)(next)(action)
//1st way of writing middleware
/*const logger= function ({dispatch, getState}) {
    return function (next) {
        return function (action) {
            // middleware code
            console.log('ACTION_TYPE=', action.type);
            next(action);
        }
    }
};*/
//2nd way of writing logger
const logger=({dispatch, getState})=>(next)=>(action)=>{
    //logger code
    //console.log('ACTION_TYPE=', action.type);
    if(typeof action!=='function')
    {
        console.log('ACTION_TYPE=', action.type);
    }

};
const thunkMy=({dispatch, getState})=>(next)=>(action)=>{
    //logger code
    //console.log('ACTION_TYPE=', action.type);
    if(typeof action==='function')
    {
        action(dispatch);
        return;
    }
    next(action);
};
const store= createStore(rootReducer, applyMiddleware(thunk));

console.log("state", store.getState());
ReactDOM.render(<App store={store}/>, document.getElementById('root'));



