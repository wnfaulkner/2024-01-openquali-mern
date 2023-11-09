import NavBar from '../../components/NavBar'

export default function AuthPage ({ user }) {
  return(
    <>
      <NavBar user={user} />
      <h1>Order History Page</h1>
    </>
  )
}
