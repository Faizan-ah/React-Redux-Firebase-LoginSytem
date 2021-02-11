import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import fire from './config/fire';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import { createLogger } from 'redux-logger';
import {Provider} from 'react-redux'
import {firebaseReducer, firestoreReducer, getFirebase, reactReduxFirebase} from 'react-redux-firebase'
import {reduxFirestore,getFirestore} from 'redux-firestore'
import thunk from "redux-thunk" 
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

const initialMathState = {
    result: 1,
    lastValues:[]

}

const mathReducer = (state = initialMathState, action)=>{
  switch(action.type){
    case 'Add':
      state = {
          ...state,
          result: state.result + action.payload,
          lastValues:[...state.lastValues,action.payload]
      }
      break
    case 'Sub':
        state = {
            ...state,
            result: state.result - action.payload,
            lastValues:[...state.lastValues,action.payload]
        }
      break
  }
  return state;
}

const initialUserState = {
    user: null,
    isAuth: false
}
const userReducer = (state = initialUserState , action)=>{
    switch(action.type){
        case 'nullUser':
            state={
                ...state,
                user:null,
                isAuth:false    
            }
        case 'setUser':
            state = {
                ...state,
                user: action.payload,
                isAuth: true,
            }
            break
    }
    return state;
  }


//personal logger
const myLogger  = (store) => (next) => (action) =>{
    console.log('logged action: ', action)
    next(action)
}

const store =  createStore(
    combineReducers({
        user: userReducer,
    }),
    {},
    compose(
        applyMiddleware(createLogger()),

    )
    
)

store.subscribe(()=>{
  console.log('store updated!', store.getState())
})


// store.dispatch({
//   type: 'setisAuth',
//   payload: true
// })

// store.dispatch({
//   type: 'Add',
//   payload: 19
// })
// store.dispatch({
//     type: 'setName',
//     payload: "faizan"
//   })
// store.dispatch({
//   type: 'Sub',
//   payload: 10
// })
// store.dispatch({
//     type: 'setAge',
//     payload: 20
//   })

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
 );
serviceWorker.unregister();
