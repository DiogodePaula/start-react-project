import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Routes from './routes/index';
import { store, persistor } from './store';
import theme from './config/theme';

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Routes />
                </ThemeProvider>
            </PersistGate>
        </Provider>
    );
}

export default App;
