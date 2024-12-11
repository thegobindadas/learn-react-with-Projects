import React from 'react'
import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github() {
    const userdata= useLoaderData()


    // const [userdata, setUserdata] = useState({})

    // useEffect(() => {
    //     fetch("https://api.github.com/users/thegobindadas")
    //     .then(res => res.json())
    //     .then(userdata => setUserdata(userdata))
    // }, [])


    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {userdata.followers}
    <img src={userdata.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/thegobindadas")
 
    return response.json()
}
