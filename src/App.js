import React, { Component } from 'react';
import Home from './pages/Home';
import { ParallaxProvider } from 'react-scroll-parallax';

class App extends Component {
  render() {
    return (
      <ParallaxProvider>
        <Home />
      </ParallaxProvider>
    );
  }
}

export default App;
