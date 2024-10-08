"use client";
import React, { useState, useEffect } from 'react';
import { v4 as uuidV4 } from 'uuid';
import { useRouter } from 'next/navigation';

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
        router.push(`/editor/${roomId}`, {
            state: {
                username,
            }
        });
    }

    const handleInputEnter = (e) => {
        if (e.code=='Enter') {
            joinRoom();
        }
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
                    onKeyUp={handleInputEnter}
                />
                <input 
                    type='text'
                    className='inputBox'
                    placeholder='USERNAME'
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    onKeyUp={handleInputEnter}
                />
                <button 
                    className='joinButton'
                    onClick={joinRoom}>
                    Join
                </button>
                <br></br>
                <span className='createInfo'>
                    If you dont have an invite then create
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