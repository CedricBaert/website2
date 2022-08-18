import React from 'react'
import Avatar from '../components/Avatar'

export default function AvatarPage() {
    return (
        <div>
            <h1>Generate and download your avatar</h1>
            <div className='avatar-grid'>
                <li></li>
                <li><Avatar/></li>
                <li></li>
            </div>
        </div>
    )
}
