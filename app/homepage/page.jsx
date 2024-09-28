"use client";
import React, { useState, useEffect } from 'react';
import { v4 as uuidV4 } from 'uuid';
import { useRouter } from 'next/router';

export default function Homepage() {
    const router = useRouter();
    const [roomId, setRoomId] = useState('');
    const [username, setUsername] = useState('');

    const createNewRoom = (e) => {
        e.preventDefault();
        const id = uuidV4();
        setRoomId(id);
        console.log(id);
    }

    const joinRoom = () => {
        if (!roomId || !username) {
            console.log("Toast: Room ID and username is required.");
            return;
        }

        //Redirect

    }

    return (
        <div className='homePageWrapper'>
            <div className='formWrapper'>
                <input 
                    type='text'
                    className='inputBox'
                    placeholder='ROOM ID'
                    onChange={(e) => setRoomId(e.target.value)}
                    value={roomId}
                />
                <input 
                    type='text'
                    className='inputBox'
                    placeholder='USERNAME'
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                />
                <button 
                    className='joinButton'
                    onClick={joinRoom}>
                    Join
                </button>
                <span className='createInfo'>
                    If you don't have an invite then create &nbsp;
                    <a 
                        href='' 
                        className='createNewBtn'
                        onClick={createNewRoom}>
                        New Room
                    </a>
                </span>
            </div>
            <footer>
                <h4>
                    Built with 💛 by <a href='https://github.com/Collaborative-Open-Source-Projects'>Open Source Projects</a>
                </h4>
            </footer>
        </div>
    );
};