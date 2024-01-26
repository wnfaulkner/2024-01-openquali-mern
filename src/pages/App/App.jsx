// APP

import './App.css';

import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import { Axios } from 'axios';

import NavBar from '../../components/Nav/NavBar.jsx';
import AuthPage from '../AuthPage/AuthPage';
import MainPage from '../MainPage/MainPage';

function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      <NavBar user={user} setUser={setUser} />
      {/* { user ? */}
        <Routes>
          <Route path="/" element={<MainPage user={user} setUser={setUser} />} />
        </Routes>
        {/* : 
        <AuthPage setUser={setUser} />
      } */}
    </main>
  );
}

export default App;
