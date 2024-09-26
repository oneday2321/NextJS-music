'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [key, setKey] = useState('');
  const [value, setValue] = useState('');
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0); 

  const handleClick = () => {
    router.push('/audio/upload');
  };


const calculateModulus = (num1: number, num2: number): number => {
  if (num2 === 0) {
    throw new Error('Division by zero is not allowed.');
  }
  return num1 % num2;
};

const handleSubmit = async (e: { preventDefault: () => void; }) => {
  e.preventDefault();
  const res = await fetch('/api/redis', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ key, value }),
  });

  if (res.ok) {
    alert('Data stored in Redis');
  } else {
    alert('Failed to store data');
  }
};
  const handleRedirect = () => {
    window.location.href = 'https://www.baidu.com';
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column', position: 'relative' }}>
      <div style={{ position: 'absolute', top: '10px', left: '10px', textAlign: 'left', maxWidth: '300px', fontSize: '14px', lineHeight: '1.5' }}>
        Music List Management:
        GET /api/audio/list: Retrieves all music lists.
        POST /api/audio/list: Creates a new music list for a user. Validates the user and saves the list.
        PUT /api/audio/list: Adds a music track to an existing list.
        GET /api/audio: Retrieves all music details.
        POST /api/audio: Handles file uploads for music tracks and cover images, saves them to the server, and stores metadata in the database.
      </div>
      
      <button 
        onClick={handleClick} 
        style={{ 
          backgroundColor: 'blue', 
          width: '100px', 
          height: '50px',
          fontSize: '12px',
          cursor: 'pointer',
          marginBottom: '400px' 
        }}
      >
        page jump
      </button>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <input 
          type="number" 
          placeholder="Enter first number" 
          value={num1} 
          onChange={(e) => setNum1(Number(e.target.value))} 
          style={{ marginBottom: '20px', padding: '5px', fontSize: '16px', width: '200px' }}
        />
        <input 
          type="number" 
          placeholder="Enter second number" 
          value={num2} 
          onChange={(e) => setNum2(Number(e.target.value))} 
          style={{ marginBottom: '20px', padding: '5px', fontSize: '16px', width: '200px' }}
        />
        <button 
          type="submit" 
          style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', backgroundColor: 'blue' }}
        >
          redis send
        </button>
      </form>
      <button 
        onClick={handleRedirect} 
        style={{ 
          position: 'absolute', 
          bottom: '20px', 
          right: '20px', 
          backgroundColor: 'red', 
          color: 'white', 
          padding: '10px 20px', 
          border: 'none', 
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Go to Baidu
      </button>
    </div>

  );
}