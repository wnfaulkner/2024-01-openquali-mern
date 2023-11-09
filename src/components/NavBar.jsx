import { Link } from 'react-router-dom'
const userService = require('../utilities/users-service.js')

export default function NavBar ({ user, setUser }) {

  function handleLogout() {
    userService.logout()
    setUser(null)
  }

  return(
    <>
      <nav>
        <p>Welcome, {user.name}</p>
        <a href="/orders/history" >Order History</a>
        &nbsp;
        |
        &nbsp;
        <a href="/orders/new" >New Order</a>
        &nbsp;
        |
        &nbsp;
        <Link to="" onClick={handleLogout}>Log Out</Link>
      </nav>
    </>
  )
}