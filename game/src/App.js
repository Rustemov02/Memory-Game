import React from 'react'
import './index.css'
import Level1 from './components/Level-1.js';
import Level2 from './components/Level-2.js'
import Level3 from './components/Level-3.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Welcome from './Welcome'
import { Stack } from '@mui/material';

function App() {
  return (
    <Stack bgcolor='#153659' height="100vh" direction='row' justifyContent='center'>
      <Router>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/level-1' element={<Level1 />} />
          <Route path='/level-2' element={<Level2 />} />
          <Route path='/level-3' element={<Level3 />} />
        </Routes>
      </Router>
    </Stack>

  );
}

export default App;
