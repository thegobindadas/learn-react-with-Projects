import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    let {UserId} = useParams()
  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>
      UserId: {UserId}
    </div>
  )
}

export default User
