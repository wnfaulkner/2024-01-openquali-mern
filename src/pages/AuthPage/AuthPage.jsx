// AUTH PAGE

import SignUpForm from '../../components/UserAuth/SignUpForm';
import LoginForm from '../../components/UserAuth/LoginForm'
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