import PropTypes from 'prop-types'
import React, { Component } from 'react'
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://8c868f953f534c94be172d5c059eb847@o4505469408051200.ingest.sentry.io/4505469409558528",
  integrations: [
    new Sentry.BrowserTracing({
     
    }),
    new Sentry.Replay(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});
export default class ErrorBoundary extends Component {
 
    constructor(props) {  
        super(props);  
        this.state = { 
            hasError: false
         };  
      }  

      static getDerivedStateFromError(error) {  
        // It will update the state so the next render shows the fallback UI.  
        return { hasError: true };  
      } 
      
      componentDidCatch(error, info) {  
        
        Sentry.captureException(error);
        console.log(error);
      }  


      render() {  
        if (this.state.hasError) {  
            return (  
            <div>Something is wrong.</div>
        );  
        }  
        return this.props.children;   
      }  
    }  