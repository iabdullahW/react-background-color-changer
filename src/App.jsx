import { useState } from 'react'
import './App.css'


      


function App() {
  const [bgColor, setBgColor] = useState('');

  return (
    <div className="App" style={{ backgroundColor: bgColor }}>
      <div className="button-container">
        <button onClick={() => setBgColor('red')}>Red</button>
        <button onClick={() => setBgColor('pink')}>Pink</button>
        <button onClick={() => setBgColor('green')}>Green</button>
        <button onClick={() => setBgColor('lightgrey')}>Grey</button>
      </div>
    </div>
  );
}

export default App;
