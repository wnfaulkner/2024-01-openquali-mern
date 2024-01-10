import NavBar from '../../components/NavBar'

export default function NewOrderPage ({ user, setUser }) {
  return(
    <>
      <NavBar user={user} setUser={setUser} />
      <h1>MAIN</h1>
    </>
  )
}