import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import NavBar from '../Components/NavBar';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';

function App() {
  const [user, setUser] = useState(null)

  return (
    <main className="App">
      { user ?
        <Routes>
          <Route path="/orders/new" element={<NewOrderPage />} />
          <Route path="/orders/history" element={<OrderHistoryPage />} />
        </Routes>
        :
        <AuthPage />
      }
    </main>
  );
}

export default App;
