import React from 'react';
import ReactDOM from 'react-dom/client';
import "dayjs/locale/ru";
import App from './App';
import { StyledEngineProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import { LocalizationProvider, ruRU } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <LocalizationProvider
      adapterLocale={'ru'}
      dateAdapter={AdapterDayjs}>
      <StyledEngineProvider injectFirst>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StyledEngineProvider>
    </LocalizationProvider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
