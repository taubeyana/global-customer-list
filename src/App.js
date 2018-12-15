import React, { Component } from 'react';
import './App.css';
import clients from './clients';
import ClientsList from './components/ClientsList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ClientsList data = { clients.Customers }/>
      </div>
    );
  }
}

export default App;
