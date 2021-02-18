import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import TodoPageContainer from 'containers/todo/TodoPageContainer';
import ToastContainer from './components/toastContainer/ToastContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <section className="container" data-test="component-app">
                    <TodoPageContainer />
                </section>
                <ToastContainer />
            </PersistGate>
        </Provider>
    );
};

export default App;
