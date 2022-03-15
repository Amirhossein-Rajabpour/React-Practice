import React from 'react'
import User from './User'
import axios from 'axios';
import { useState, useEffect } from 'react';
import logo from '../Ellipsis-1s-200px.gif';


const UserList = () => {
    const [data, setData] = useState([])
    const [isLoaded, setLoading] = useState(false)

    useEffect(async() => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users")

        setTimeout(() => {
            setLoading(true)
        }, 1000) // just for showing loading gif

        setData(response.data)
        console.log(data)
    }, [])

    return (
        <div>
            {
                isLoaded ? 
                data.map((user) => {
                    return <User 
                        key={user.username} 
                        name={user.name} 
                        email={user.email}
                        phone={user.phone}
                        website={user.website}
                        />
                })
                :
                <img 
                    className='loader'
                    src={logo}
                    alt='wrong path'
                />
            }
        </div>
    )
}

export default UserList
