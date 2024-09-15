import React from 'react';
import ReactDOM from 'react-dom/client';
import Location from './components/Location';
import './index.css'; 

const App = () => {
  return (
    <div>
      <h1>Welcome to the Location App</h1>
      <Location />
    </div>
  );
};

// Get the root element from the HTML and render the App component into it
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
