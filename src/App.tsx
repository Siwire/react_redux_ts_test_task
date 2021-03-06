import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store';
import Main from './Main';

function App() {
  return (
    <Provider store={store}><Main /></Provider>
  )
}

export default App;
