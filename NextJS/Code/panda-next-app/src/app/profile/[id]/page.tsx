import React from 'react'

const UserProfile = ({params}:any) => {
  return (
    <div>
        <h1>user Profile</h1>
        <p>User ID :{params.id}</p>
    </div>
  )
}

export default UserProfile