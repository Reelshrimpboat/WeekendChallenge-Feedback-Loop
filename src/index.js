import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const responseReducer = (state = {feelingsRating: "", understandingRating: "", supportedRating: "", otherComments: ""}, action) => {
    console.log( 'in responseReducer, last state:' , state , 'action: payload:' , action.payload , 'action.type:' , action.type)
    switch (action.type) {
        case 'FEELINGS':
            return { ...state , feelingsRating: action.payload};
            break;
        case 'UNDERSTAND':
            return { ...state , understandingRating: action.payload};
            break;
        case 'SUPPORT':
            return { ...state , supportedRating: action.payload};
            break;
        case 'COMMENTS':
            return { ...state , otherComments: action.payload};
            break;
        default:
            return state;
    } 
};

const storeInstance = createStore(
    combineReducers({
        responseReducer
    }),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
