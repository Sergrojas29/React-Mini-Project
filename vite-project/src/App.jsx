import { ThemeProvider, CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router';
import './App.css';
import { theme } from './common/theme';
import Home from './Home';
import MultipleChoice from './components/MultipleChoice';
import ChipStack from './components/ChipStack';
import { useEffect, useState } from 'react'

function App() {

  const [activeDictionary, setActiveDictionary] = useState(undefined);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ChipStack setActiveDictionary={setActiveDictionary}/>
        <Routes>
          <Route path='/' element={<Home activeDictionary={activeDictionary} />} />
          <Route path='/multi' element={<MultipleChoice activeDictionary={activeDictionary} />} />
        </Routes>
    </ThemeProvider>
  );
}

export default App;