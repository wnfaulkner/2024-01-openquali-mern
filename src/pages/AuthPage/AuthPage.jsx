// AuthPage.jsx

import SignUpForm from '../../components/SignUpForm';
import './AuthPage.css'

export default function AuthPage() {
  return (
    <main>
      <h1>AuthPage</h1>
      <SignUpForm className="sign-up-form" />
    </main>
  );
}