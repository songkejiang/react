import React, { Component } from 'react';
import { GlobalStyle} from './style.js'
import {GlobaIconFont} from './static/iconfont/iconfont'
import Header from './common/header'
import store from './store'
import {Provider} from 'react-redux'
class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyle/>
        <GlobaIconFont />
        <Provider store={store}>
          <Header/>
        </Provider>
      </div>
    );
  }
}
export default App;
