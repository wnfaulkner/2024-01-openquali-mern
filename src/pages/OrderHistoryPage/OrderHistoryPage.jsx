import NavBar from '../../components/NavBar'
import { checkToken } from '../../utilities/users-service';

export default function OrderHistoryPage ({ user, setUser }) {

  async function handleCheckToken(evt) {
    const expDate = await checkToken();
    console.log(expDate)
  }

  return(
    <>
      <NavBar user={user} setUser={setUser} />
      <h1>Order History Page</h1>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </>
  )
}
