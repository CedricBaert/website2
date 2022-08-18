import './App.css';
import React from 'react';
import Header from './components/Header';
import HomePage from './Pages/HomePage';
import HumorPage from './Pages/HumorPage';
import AvatarPage from './Pages/AvatarPage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header> 
          <Routes>
            <Route path='/' exact element={<HomePage/>}/>
            <Route path='/wastemytime/' exact element={<HomePage/>}/>
            <Route path='/HumorPage' exact element={<HumorPage/>} />
            <Route path='/AvatarPage' exact element={<AvatarPage/>} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
