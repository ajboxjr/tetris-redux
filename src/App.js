import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'

import './App.css'

import GridBoard from './components/grid-board'
import Controls from './components/controls'
import NextBlock from './components/next-block'

const store = createStore(reducers)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <GridBoard />
          <Controls />
          <NextBlock />
        </div>
      </Provider>
    );
  }
}

export default App;
