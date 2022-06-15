import { useState } from 'react';
import './App.css';
import Card from './card';
function App() {
  const data = [
    {
      id: 1,
      name: 'John',
      age: '20',
      email: 'john@gmail.com',
      job: 'teacher',
    },
    {
      id: 2,
      name: 'Peter',
      age: '30',
      email: 'peter@gmail.com',
      job: 'student',
    },
    {
      id: 3,
      name: 'Jane',
      age: '40',
      email: 'jane@gmail.co,',
      job: 'designer',
    },
    {
      id: 4,
      name: 'Jane',
      age: '40',
      email: 'jane@gmail.co,',
      job: 'designer',
    },
    {
      id: 4,
      name: 'Sanjay',
      age: '22',
      email: 'sanjay@gmail.co,',
      job: 'Software Engineer',
    },
  ];

  function loop(obj) {
    return Card(obj);
  }

  return (
    <div className='container'>
      {data.map(loop)}
      {/* <h1 className='heading'>Count {count}</h1>
      <button onClick={clickFunction}>Increase </button> */}
    </div>
  );
}

export default App;
