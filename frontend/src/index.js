import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import SongsProvider from './context/songsContext/songsState';
import AuthProvider from './context/authContext/authState';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <SongsProvider>
      <App />
    </SongsProvider>
  </AuthProvider>
);

