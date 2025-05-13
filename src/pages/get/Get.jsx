import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../../api'

const Get = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(8)

  useEffect(() => {
    api
      .get(`/Users?limit=${page}`)
      .then((res) => {
        console.log(res.data);
        
        setUsers(res.data)
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false)
      })
  }, [page])

  return (
    loading ? (
      <div className="flex items-center justify-center">
        <h1 className="text-2xl font-bold text-black animate-pulse">Loading...</h1>
      </div>
    ) : (
      <div className='flex flex-col items-center justify-center  mt-[2500px]'>
        <div className="grid grid-cols-4 gap-6 p-5">
          {users?.map((user) => (
            <div
              key={user.id}
              className="p-[10px] w-[300px] h-[380px] bg-white shadow-lg rounded-2xl p-5 hover:shadow-xl transition duration-300"
            >
              <Link to={`/users/${user.id}`}>
                <img
                  src={user.image}
                  alt="No image"
                  className="w-full h-48 object-cover rounded-xl mb-4 cursor-pointer"
                />
              </Link>
              <h1 className="text-xl font-semibold text-gray-800 mb-2">
                {user.firstName} {user.lastName}
              </h1>
              <div className="text-gray-600 space-y-1">
                <p><span className="font-medium text-gray-700">Gender:</span> {user.gender}</p>
                <p><span className="font-medium text-gray-700">Age:</span> {user.age}</p>
                <p><span className="font-medium text-gray-700">University:</span> {user.university}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => { setPage(page + 8) }}
          className='w-[100px] border-none shadow-lg h-[40px] font-semibold bg-green-600 rounded-[10px] hover:bg-green-800 text-white transition'>
          See More
        </button>
      </div>
    )
  )
}

export default Get
