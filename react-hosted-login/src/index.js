import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { FronteggProvider } from '@frontegg/react';

const contextOptions = {
  baseUrl: 'https://app-frtqiefxjqn9.frontegg.com',
  clientId: '04017595-4e5d-4e7e-aff6-93c58d489d2f'
};

const authOptions = {
  // keepSessionAlive: true // Uncomment this in order to maintain the session alive
 };

 ReactDOM.render(
  <FronteggProvider contextOptions={contextOptions} hostedLoginBox={true} authOptions={authOptions}>
      <App />
  </FronteggProvider>,
  document.getElementById('root')
);