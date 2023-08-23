import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';

function App() {
  return (
    <>
      <p>Sistema Solar</p>
      <Header />
      <SolarSystem />
      <Missions />
    </>
  );
}

export default App;
