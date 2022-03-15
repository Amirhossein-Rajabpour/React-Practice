import React from 'react'
import PropTypes from 'prop-types'


const User = ({ phone, email, name, website }) => {
    return (
        <div className='user'>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
        </div>
    )
}

User.defaultProps = {
    phone: "11111111",
    email: "default@mail.com",
    name: "name",
    website: "google.com",
}

User.propTypes = {
    phone: PropTypes.string,
    email: PropTypes.string,
    name: PropTypes.string,
    website: PropTypes.string,
}

export default User
