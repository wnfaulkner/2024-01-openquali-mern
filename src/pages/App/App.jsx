import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';

import NavBar from '../../components/NavBar.jsx';
import AuthPage from '../AuthPage/AuthPage';
import MainPage from '../MainPage/MainPage';

function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      { user ?
        <Routes>
          <Route path="/" element={<MainPage user={user} setUser={setUser} />} />
        </Routes>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

export default App;
