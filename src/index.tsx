import React from "react";
import { RecoilRoot } from "recoil";
import { darkTheme } from "./theme";
import { ThemeProvider } from "styled-components";
import App from "./App";

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container!); 
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={darkTheme}>
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>,
  
);
