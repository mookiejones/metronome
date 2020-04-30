import React from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleBPMContainer from './containers/SimpleBPMContainer'
import DataProvider from './DataProvider';
function App() {
  return (
    <div className="App">
      <DataProvider>

        <SimpleBPMContainer />
      </DataProvider>
    </div>
  );
}

export default App;
