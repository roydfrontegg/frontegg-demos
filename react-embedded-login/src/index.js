import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { FronteggProvider} from '@frontegg/react';
import { BrowserRouter, Link } from 'react-router-dom';

const contextOptions = {
  baseUrl: 'https://app-frtqiefxjqn9.frontegg.com',
};

const authOptions = {
  // keepSessionAlive: true // Uncomment this in order to maintain the session alive
};

const themeOptions = {
    loginBox: {
        themeName: 'classic',

    }
}

const localizations = {
  en: {
    loginBox: {
      login: {
       continue: 'New button text'
      }
    },
  },
};

ReactDOM.render(
  <BrowserRouter>
     <FronteggProvider contextOptions={contextOptions} hostedLoginBox={false} themeOptions={themeOptions} localizations={localizations} 
     authOptions={{routes: {signUpUrl:'yourUrlHere'}}}>
        <App />
     </FronteggProvider>
  </BrowserRouter>,
  document.getElementById('root')
);