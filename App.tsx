import React from 'react';
import Navigation from './src/navigations/stack';
import {Provider} from 'react-redux';
import {store} from './src/store/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
