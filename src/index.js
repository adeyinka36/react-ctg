import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import editorReducer from "./store/reducers/editor";
import {Provider} from "react-redux";

let initialState = [{
    id: 1,
    name: 'Paul',
    number: '075357832245',
    selected: false
},
    {
        id: 2,
        name: 'Mike',
        number: '07534442245',
        selected: false
    },
    {
        id: 3,
        name: 'Tim',
        number: '07666632245',
        selected: false
    }
]

let store = createStore(editorReducer, initialState)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
);
