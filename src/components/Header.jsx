import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <nav>
            <ul className='w-6/12 flex justify-around items-center'>
                <Link to="/">
                    <li>
                        Home
                    </li>
                </Link>
                <Link to="/AvatarPage">
                    <li>
                        Avatar
                    </li>
                </Link>
                <Link to="/HumorPage">
                    <li>
                        Humor
                    </li>
                </Link>
            </ul>
        </nav>
    )
}
