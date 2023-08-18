import React from 'react';
import WelcomePage from './components/Welcome'
import Nav from './components/Nav';

function App() {
  return (
    <div className="max-h-screen">
      <Nav />
      <WelcomePage />
    </div>
  )
}

export default App
