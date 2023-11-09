import { useState } from 'react'

export default function NavBar ({ user }) {
  return(
    <>
      <nav>
        <p>Welcome, {user.name}</p>
        <a href="/orders/history" >Order History</a>
        |
        <a href="/orders/new" >New Order</a>
      </nav>
    </>
  )
}