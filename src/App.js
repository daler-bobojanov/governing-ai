import React from 'react';
import './components/styles/Ramiro.css';
import MySection from './components/styles/section';


import DalerComponent1 from './components/DalerComponent1';
import DalerComponent2 from './components/DalerComponent2';

function App() {
  return (
    <div className="App">

     <MySection/>

         


      {/* <h1>Governing AI group project</h1> */}
      <DalerComponent1 />
      <DalerComponent2 />

    </div>
  );
}


export default App;
