import React from 'react'

function UserMessage(props) {
  return (
    <div>
        {
            props.isLoggedIn ? (
                <div>
                    <p>Welcome!</p>
                    <ol>
                        <li>Confirm email</li>
                        <li>Complete profile</li>
                        <li>Get newsletter</li>
                    </ol>
                </div>
            ) : (
                <p>Please sign in</p>
            )
        }
    </div>
  )
}

export default UserMessage