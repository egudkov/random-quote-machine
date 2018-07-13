import React, { Component } from 'react';
import './App.css';

import QuoteBox from './components/QuoteBox/QuoteBox';

class App extends Component {
  render() {
    const styles = {
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    };
    return (
      <div style={styles}>
        <QuoteBox />
      </div>

    );
  }
}

export default App;
