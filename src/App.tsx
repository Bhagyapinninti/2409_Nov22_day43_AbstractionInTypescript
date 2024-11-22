import React from 'react';
import logo from './logo.svg';
import './App.css';
import RRRMovie from './classes/RRRMovie';
import Devara from './classes/Devara';
import Kalki from './classes/Kalki';

function App() {

  //let rajamouli= new RRRMovie();
   let NTR = new Devara();
   NTR.noOfHeroes=1;
   NTR.noOfHeroines=1;

let prabhas = new Kalki();
prabhas.noOfHeroes=5;
prabhas.noOfHeroines=2;

  
  return (
    <div className="App">
      <h1>Abstraction in Typescript</h1>
    </div>
  );
}

export default App;
