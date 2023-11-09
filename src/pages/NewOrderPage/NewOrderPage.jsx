import NavBar from '../../components/NavBar'

export default function NewOrderPage ({ user, setUser }) {
  return(
    <>
      <NavBar user={user} setUser={setUser} />
      <h1>New Order Page</h1>
    </>
  )
}