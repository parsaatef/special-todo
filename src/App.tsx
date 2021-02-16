import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoSearch from './containers/todo/todoSearch/TodoSearch';
import TodoStatusFilter from './containers/todo/todoStatusFilter/TodoStatusFilter';
import './App.css';

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <h1>Docler FE Homework</h1>
                <TodoSearch searchUpdate={() => console.log("test")} />
                <TodoStatusFilter updateStatus={() => console.log("test")} />
                <ul>
                    <li>Create the layout based on the designs at the bottom of the task's description</li>
                    <li>Make sure the layout looks great both on desktop and on mobile</li>
                    <li>Focus on good UX</li>
                    <li>Use React with TypeScript</li>
                    <li>Cover the functionality with tests</li>
                    <li>Get data for the list from <a href="https://jsonplaceholder.typicode.com/todos" target="_blank" rel="noopener noreferrer">https://jsonplaceholder.typicode.com/todos</a> using an asynchronous call</li>
                    <li>Pay attention to architecture and code organizing</li>
                    <li>Feel free to add new dependencies if you need anything</li>
                </ul>
            </PersistGate>
        </Provider>
    );
};

export default App;
