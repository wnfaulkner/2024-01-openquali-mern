// NAV BAR

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
        <a href="/" >Main</a>
        &nbsp;
        |
        &nbsp;
        <Link to="" onClick={handleLogout}>Log Out</Link>
      </nav>
    </>
  )
}