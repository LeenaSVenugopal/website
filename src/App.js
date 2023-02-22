import React, { useState } from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"




function App() {

  const [state, setState] = useState();
  const [user, setUser] = useState();

  if(!state || state==="NotValid") {
    return <Login setState={setState} setUser={setUser} state={state} />
  }

  return (
    <div className="wrapper">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Welcome user={user}/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;