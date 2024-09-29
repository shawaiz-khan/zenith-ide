'use client';
import { useState, useEffect } from "react";

export default function DBStatus() {
    const [status, setStatus] = useState(null);
    useEffect(() => {
        const checkMongoConnection = async () => {
            try {
                const response = await fetch('/api/db-status');
                const data = await response.json();
                console.log('here');
                setStatus(data);
            } catch (error) {
                setStatus({ success: false, message: 'Failed to check connection.' });
            }
        };

        checkMongoConnection();
    }, []);
        
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>MongoDB Connection Status</h1>
      {status === null ? (
        <h2>Checking connection...</h2>
      ) : status.success ? (
        <h2 style={{ color: 'green' }}>Successfully connected to MongoDB!</h2>
      ) : (
        <h2 style={{ color: 'red' }}>Failed to connect to MongoDB.</h2>
      )}
    </div>
    )
}