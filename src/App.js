import React from 'react';
import './App.css';
import FirstCounter from './component/FirstCounter';
// Notice how we don't pass anything thru the app.js
function App() {
  return (
    <div className="App">
      <FirstCounter/><br/> 
    </div>
  );
}

export default App;
