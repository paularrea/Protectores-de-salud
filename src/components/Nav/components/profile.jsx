import React from 'react'

const Profile = ({ user, Logout }) => {
    return (
        <div>
                  <button onClick={Logout}>Logout</button>
        </div>
    )
}

export default Profile
