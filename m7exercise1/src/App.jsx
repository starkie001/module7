import BitcoinRates from './components/BitcoinRates';
import Emoji from './components/Emoji';
import React from 'react';
import { MoodProvider } from './context/MoodContext.jsx';

function App() {
  return (
    <>
    <>
      <BitcoinRates />
    </>
    <MoodProvider>
        <Emoji />
      </MoodProvider>
      </>
  );
}

export default App;
