import React from 'react';
import Navigation from './src/navigations/stack';
import {Provider} from 'react-redux';
import {store, persistor} from './src/store/store';
import {PersistGate} from 'redux-persist/integration/react';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
