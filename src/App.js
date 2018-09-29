import React from 'react';
import Header from './Header';

class App extends React.Component {
  state = {
    todos: [],
    count: 0,
    addMenu: true,
  }
  render() {
    let date = new Date();
    return (
      <div className="main-container">
      <Header/>

    </div>)
  }
}
export default App;
