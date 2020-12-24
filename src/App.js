import React from 'react';
import {Provider} from 'react-redux';
import BookContainer from "./component/BookContainer";
import store from './redux/store';
import './App.css';
import HookBookContainer from "./component/HookBookContainer";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <BookContainer/>
                <HookBookContainer />
            </div>
        </Provider>
    );
}

export default App;
