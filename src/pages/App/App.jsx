import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';

import NavBar from '../../components/NavBar.jsx';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';

function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      { user ?
        <Routes>
          <Route path="/orders/new" element={<NewOrderPage user={user} />} />
          <Route path="/orders/history" element={<OrderHistoryPage user={user} />} />
        </Routes>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

export default App;
