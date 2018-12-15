import React, { Component } from 'react';
import './App.css';
import clients from './clients';
import ClientsList from './components/ClientsList';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

export const store = configureStore()

class App extends Component {
  render() {
    return (
      <Provider store = { store }>
        <div className="App">
          <ClientsList data = { clients.Customers }/>
        </div>
      </Provider>
    );
  }
}

export default App;
