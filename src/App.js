import React from 'react';
import Header from './Header';
import Body from './Body';
import './index.css';
import './body.css';

class App extends React.Component {
  state = {
    todos: [],
    count: 0
  }
  render() {
    let date = new Date();
    return (
      <div className="main-container">
      <Header/>
      <Body />

    </div>)
  }
}
export default App;
