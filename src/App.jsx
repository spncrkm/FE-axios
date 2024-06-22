import React from 'react';
import CharacterList from './components/CharacterList/CharacterList';
import BackgroundVideo from './components/BackgroundVideo/BackgroundVideo';
import './App.css'

function App() {


  return (
    <div className='app-container'>
      <BackgroundVideo />
      <div className="content">
      <CharacterList />
      </div>
    </div>
  )
}

export default App
