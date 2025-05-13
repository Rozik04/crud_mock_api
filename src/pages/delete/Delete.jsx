import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../../api'

const Delete = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    api
      .get('/Users')
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setLoading(true);
      api
        .delete(`/Users/${id}`)
        .then(() => {
          setUsers(users.filter((user) => user.id !== id));
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    loading ? (
      <div className="flex items-center justify-center">
        <h1 className="text-2xl font-bold text-black animate-pulse">Loading...</h1>
      </div>
    ) : (
      <div className='flex flex-col items-center justify-center mt-20'>
        <table className="table-auto border-collapse w-[800px]">
          <thead>
            <tr className='bg-gray-200'>
              <th className='border p-2'>First Name</th>
              <th className='border p-2'>Last Name</th>
              <th className='border p-2'>Age</th>
              <th className='border p-2'>Gender</th>
              <th className='border p-2'>University</th>
              <th className='border p-2'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className='text-center'>
                <td className='border p-2'>{user.firstName}</td>
                <td className='border p-2'>{user.lastName}</td>
                <td className='border p-2'>{user.age}</td>
                <td className='border p-2'>{user.gender}</td>
                <td className='border p-2'>{user.university}</td>
                <td className='border p-2'>
                  <button className='bg-red-500 text-white px-2 py-1 rounded mr-2 hover:bg-red-700'
                    onClick={() => handleDelete(user.id)}>
                    Delete
                  </button>
                  <Link to={`/`} className='bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700'>
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  );
};

export default Delete;

