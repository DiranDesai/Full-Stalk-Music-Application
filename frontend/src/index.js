import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import SongsProvider from "./context/songsContext/songsState";
import AuthProvider from "./context/authContext/authState";
import NotifyProvider from "./context/notifyContext/notifyState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <NotifyProvider>
    <AuthProvider>
      <SongsProvider>
        <App />
      </SongsProvider>
    </AuthProvider>
  </NotifyProvider>
);
