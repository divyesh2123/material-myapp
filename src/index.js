import React from 'react';
import ReactDOM from 'react-dom/client';



import ErrorBoundary from './ErrorBoundary';
import Test from './Test';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
      
   
     <ErrorBoundary>

       <Test />  

       </ErrorBoundary>

         {/* <App/>  */}

        {/* <ReactUserData text="This is the javascript This is the javascript This is the javascript This is the javascript This is the javascript This is the javascript This is the javascript  This is the javascript This is the javascript"/> */}


     
      
      {/* <App/> */}
      
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function

