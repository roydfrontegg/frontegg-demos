import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { FronteggProvider } from '@frontegg/react';
import { BrowserRouter } from 'react-router-dom';

const contextOptions = {
  baseUrl: 'https://app-frtqiefxjqn9.frontegg.com',
};

const authOptions = {
  // keepSessionAlive: true // Uncomment this in order to maintain the session alive
};

ReactDOM.render(
  <BrowserRouter>
     <FronteggProvider contextOptions={contextOptions} hostedLoginBox={false}>
        <App />
     </FronteggProvider>
  </BrowserRouter>,
  document.getElementById('root')
);