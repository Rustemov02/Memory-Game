import React from 'react'
import './index.css'
import Cards from './components/Cards';
import { BrowserRouter as Router, Switch, Routes, Route } from 'react-router-dom'
import Welcome from './Welcome'

function App() {
  return (
    <>

      {/* <div className="App">
        <Cards />
      </div> */}

      <Router>
        <Routes>
          <Route path='/' element={<Welcome/>} />
          <Route path='/level-1' element={<Cards/>} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
