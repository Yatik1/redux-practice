import React from 'react'
import { useSelector } from 'react-redux'


function Profile() {

  const user = useSelector((state) => state.user.value)
  const themeColor = useSelector((state) => state.theme.value)
  return (
    <div style={{color: themeColor}}>
     <h1>Profile Page</h1>
     <div>
        <p>Name : {user.name}</p>
        <p>Age : {user.age}</p>
        <p>Email : {user.email}</p>
     </div>
    </div>
  )
}

export default Profile
