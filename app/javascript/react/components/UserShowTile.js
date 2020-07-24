import React from 'React'
import { Link } from 'react-router-dom'

const UserShowTile = props => {
  const email = props.email
  const profilePhoto = props.profile_photo
  const id = props.id

  return (
    <div className='bg-white'>
      <div className="grid-x margin-x">
        <div className="cell small-4">
          <img src={profilePhoto} />
        </div>
        <Link to={`/users/${id}`}
        <div className="cell auto">
          {email}
        </div>
        </Link>
      </div>
    </div>
  )
}

export default UserShowTile
