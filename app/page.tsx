'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [key, setKey] = useState('');
  const [value, setValue] = useState('');

  const handleClick = () => {
    router.push('/audio/upload');
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

const handleCalculate = () => {
    const value1 = parseFloat((document.getElementById('value1') as HTMLInputElement).value);
    const value2 = parseFloat((document.getElementById('value2') as HTMLInputElement).value);
    const operation = (document.getElementById('operation') as HTMLSelectElement).value;
    let result;

    if (isNaN(value1) || isNaN(value2)) {
      result = 'Please enter valid numbers';
    } else {
      switch (operation) {
        case 'add':
          result = value1 + value2;
          break;
        case 'subtract':
          result = value1 - value2;
          break;
        case 'multiply':
          result = value1 * value2;
          break;
        case 'divide':
          result = value2 !== 0 ? (value1 / value2).toFixed(2) : 'Cannot divide by zero';
          break;
        case 'average':
          result = ((value1 + value2) / 2).toFixed(2);
          break;
        default:
          result = 'Invalid operation';
      }
    }
    (document.getElementById('result') as HTMLDivElement).innerText = `Result: ${result}`;
  };

const calculateAverage = (num1, num2) => {
    return (num1 + num2) / 2;
};

  return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh', 
        flexDirection: 'column', 
        position: 'relative',
        animation: 'background-gradient 5s ease infinite',
        background: 'linear-gradient(270deg, red, yellow, blue)',
        backgroundSize: '600% 600%'
      }}>

	<div className='clacky-intro' style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '10px', borderRadius: '5px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)', textAlign: 'left', fontSize: '16px', lineHeight: '1.4' }}>
        Clacky是一个基于云的开发环境，提供便捷的协作开发功能。
    </div>
        <h2 className="text-lg font-bold">介绍</h2>
        <p className="text-sm mt-2">
            跟随Clacky，畅享无缝的开发体验。<br />
            我们的目标是简化协作，提升效率。<br />
        </p>
<button 
        onClick={handleClick} 
        style={{ 
          backgroundColor: 'lightblue', 
          width: '180px', 
          height: '80px',
          fontSize: '18px',
          cursor: 'pointer',
          marginBottom: '20px' 
        }}
      >
        Page Jump
      </button>
<input 
        type="number" 
        id="value1" 
        placeholder="Enter value 1" 
        style={{ marginBottom: '20px', padding: '10px', fontSize: '18px', width: '250px' }}
      />
      <input 
        type="number" 
        id="value2" 
        placeholder="Enter value 2" 
        style={{ marginBottom: '20px', padding: '10px', fontSize: '18px', width: '250px' }}
      />
<select id="operation" style={{ marginBottom: '20px', padding: '10px', fontSize: '18px', width: '250px' }}>
        <option value="add">Add</option>
        <option value="subtract">Subtract</option>
        <option value="multiply">Multiply</option>
        <option value="divide">Divide</option>
        <option value="average">Average</option>
</select>
<button 
        id="calculateButton" onClick={handleCalculate}
        style={{ 
          padding: '10px 30px', 
          fontSize: '18px', 
          cursor: 'pointer', 
          backgroundColor: 'lightblue' 
        }}
      >
        Calculate
      </button>
      <div id="result" style={{ marginTop: '20px', fontSize: '18px', fontWeight: 'bold' }}></div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <input 
          type="text" 
          placeholder="Please enter key" 
          value={key} 
          onChange={(e) => setKey(e.target.value)} 
          style={{ marginBottom: '20px', padding: '10px', fontSize: '18px', width: '250px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
<input 
          type="text" 
          placeholder="Please enter value" 
          value={value} 
          onChange={(e) => setValue(e.target.value)} 
          style={{ marginBottom: '20px', padding: '10px', fontSize: '18px', width: '250px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
<button 
          type="submit" 
          style={{ padding: '20px 40px', fontSize: '20px', cursor: 'pointer', backgroundColor: 'lightblue', borderRadius: '5px', border: 'none' }}
        >
          Redis Send
        </button>
</form>
<button 
        onClick={() => router.push('/todo')} 
        style={{ 
          backgroundColor: 'lightblue', 
          padding: '10px 20px', 
          fontSize: '18px', 
          cursor: 'pointer', 
          marginTop: '20px' 
        }}
      >
        Go to Todo
      </button>
<button 
        onClick={handleRedirect} 
        style={{ 
          position: 'absolute', 
          bottom: '20px', 
          right: '20px', 
          backgroundColor: 'lightblue', 
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