import React from 'react';
import './App.css';
import FirstCounter from './component/FirstCounter';
import SecondCounter from './component/SecondCounter';
// Notice how we don't pass anything thru the app.js
function App() {
  return (
    <div className="App">
      <FirstCounter/><br/> 
      <SecondCounter/>
    </div>
  );
}

export default App;
