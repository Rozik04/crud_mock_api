import React, { useState } from 'react'
import api from '../../api'

const Create = () => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    university: '',
    image: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    api
      .post('/Users', user)
      .then((res) => {
        setUser({
              firstName: '',
              lastName: '',
              age: '',
              gender: '',
              university: '',
              image: ''
        })
        })
      .catch((err) => {
        console.log('Error:', err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

   return (
    loading ? (
      <div className="flex items-center justify-center">
        <h1 className="text-2xl font-bold text-black animate-pulse">Loading...</h1>
      </div>
    ) : (
      <div className='flex flex-col items-center justify-center mt-20'>
        <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-4 w-[400px] p-5 bg-white shadow-lg rounded-2xl'>
          <input required type='text' name='firstName' placeholder='First Name' value={user.firstName} onChange={handleChange} className='p-2 bg-gray-100  rounded' />
          <input required type='text' name='lastName' placeholder='Last Name' value={user.lastName} onChange={handleChange} className='p-2 bg-gray-100 rounded' />
          <input required type='number' name='age' placeholder='Age' value={user.age} onChange={handleChange} className='p-2 bg-gray-100 rounded' />
          <input required type='text' name='gender' placeholder='Gender' value={user.gender} onChange={handleChange} className='p-2 bg-gray-100 rounded' />
          <input required type='text' name='university' placeholder='University' value={user.university} onChange={handleChange} className='p-2 bg-gray-100 rounded' />
          <input required type='text' name='image' placeholder='Image URL' value={user.image} onChange={handleChange} className='p-2 bg-gray-100 rounded' />
          
          <button type='submit' className={`p-2 bg-green-600 text-white rounded ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-700'}`}>
            {loading ? 'Creating...' : 'Create'}
          </button>
        </form>
      </div>
    )
  );
};

export default Create;