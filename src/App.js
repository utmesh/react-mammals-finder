import React from 'react';
import './App.css';

function App() {
  const finder = () => {
    let animals = [
      { type: 'Dog', mammal: true },
      { type: 'Snake', mammal: false },
      { type: 'Cheetah', mammal: true }
    ]
    let mammals = [];

    for (let i = 0; i < animals.length; i++) {
      if (animals[i].mammal === true) {
        mammals.push(animals[i].type)
      }
    }
    return document.getElementById('1').innerHTML = (mammals)
  }

  return (
    <div className="App">
      <h3> Name two mammals?</h3>
      <h4>For answer: <span><button onClick={finder}>Click Me!</button></span></h4>
      <h3 id='1'></h3>

    </div>
  );
}

export default App;
