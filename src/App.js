import React from 'react';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Fetch the external script dynamically
    fetch('https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js')
      .then(response => response.text())
      .then(scriptText => {
        // Create a script element and append the script text
        const script = document.createElement('script');
        script.innerHTML = scriptText; 




      })
      .catch(error => {
        console.error('Error loading external script:', error);
      });
  }, []);
  return <Main />;
}

export default App;
