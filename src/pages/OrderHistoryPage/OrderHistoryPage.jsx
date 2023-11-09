import NavBar from '../../components/NavBar'

export default function AuthPage ({ user, setUser }) {
  return(
    <>
      <NavBar user={user} setUser={setUser} />
      <h1>Order History Page</h1>
    </>
  )
}
