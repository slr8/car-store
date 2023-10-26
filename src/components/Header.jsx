import React from 'react'

const Header = ({ section, title, p }) => {
    return (
        <div className="title">
            <h3>{section}</h3>
            <h2>{title}</h2>
            <p>{p}</p>
        </div>
    )
}

export default Header