import React from 'react';
import Navbar from './Components/Nav/navbar'
import Highlights from './Components/Highlights/highlights';
import BottomRow from './Components/bottomRow/bottomRow'
import SecondRow from './Components/secondRow/secondRow';

function App() {
  return (
    <div className="app">
        <Navbar/>
        <SecondRow/>
        <Highlights/>
        <BottomRow/>
    </div>
  );
}

export default App;
