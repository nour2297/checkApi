import React from 'react'

const User = ({user}) => {
    return (
        <div className="user-container">
      <h1>{user.name}</h1>
      <h2>{user.address.city}</h2>
      <h3>{user.phone}</h3>
      <h4>{user.email}</h4>
        </div>
    )
}

export default User
