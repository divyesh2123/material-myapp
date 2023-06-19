import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Home';
import UseData from './UseData';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';



import Employee from './Employee';
import Appointment from './Appointment';
import Albums from './Albums';
import Registration from './Registration';
import Container from 'react-bootstrap/Container';
import Login from './Login';
import DisplayAccount from './DisplayAccount';
import EmployeeM from './EmployeeM';
import MyForm from './MyForm';
import FormWithValidation from './FormWithValidation';
import { Provider } from 'react-redux';

import store from './store/store';
import Counter from './Counter';
import UserList from './UserList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Container>

      <Provider store={store}>

        <UserList/>


      </Provider>
      
      <FormWithValidation></FormWithValidation>
    </Container>
    </LocalizationProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
