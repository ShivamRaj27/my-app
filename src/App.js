import './App.css';
import Header from './Header';

import React, { useState } from "react";

export default function App() {
  const [height, setHeight] = useState();
  const [mass, setMass] = useState();
  const [bmi, setBmi] = useState();

 
    
  const calculate = (e) => {
    e.preventDefault();
    const formValid = +height > 0 && +mass > 0;
    if (!formValid) {
      return;
    }
    const bmi = +mass / (+height/100) ** 2;
    setBmi(bmi);
  };

  return (
    <><div>
      <Header />
      
    </div><div className="App">
        <form onSubmit={calculate}>
          <div>
            <label>Height (in cm)</label>
            <input value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>

          <div>
            <label>Weight (in kg)</label>
            <input value={mass} onChange={(e) => setMass(e.target.value)} />
          </div>

          <button type="button" class="btn btn-success" type="submit">calculate</button>
          
          <button type="reset" class="btn btn-warning"  onClick={() => setHeight() & setMass() & setBmi()}>Reset</button>
        </form>
        

        <div className="container" >
      <div className="card">
        <div className="card-content">
          <span className="card-title" data-test="bmi">
            BMI: {bmi}
          </span>
          <div className="card-data">
            <span data-test="weight">Weight: {mass} kg</span>
            <br/>         
               <span data-test="height">Height: {height} cm</span>
           
          </div>

         
        </div>
      </div>
    </div>

        
      </div></>
  );
}
