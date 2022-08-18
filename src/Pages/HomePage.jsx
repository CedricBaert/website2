import React from 'react'
import imageLol from '../images/lol.jpg';

export default function HomePage() {
    return (
        <div>
            <h1>Welcome to the Humorapp</h1>
            <img src={imageLol} />
            <h2 className='.homepage-h2'>This website has been developed during the class of Front-end Web Development!</h2>
        </div>
    )
}
