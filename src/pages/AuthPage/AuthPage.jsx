// AuthPage.jsx

import SignUpForm from '../../components/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm'
import './AuthPage.css'

export default function AuthPage({ setUser }) {
  return (
    <main>
      <h1>AuthPage</h1>
      <SignUpForm className="sign-up-form" setUser={setUser} />
      <LoginForm className="login-form" setUser={setUser} />
    </main>
  );
}