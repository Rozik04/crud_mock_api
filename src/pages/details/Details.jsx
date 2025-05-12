import { useNavigate, useParams } from 'react-router-dom';
import api from '../../api';
import React, { useEffect, useState } from 'react';

const Details = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

  const { id } = useParams();

  useEffect(() => {
    api
      .get(`/Users/${id}`)
      .then((res) => {
        console.log(res.data);
        
        setData(res.data); 
      })
      .catch((err) => {
        console.log(err.response.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <h1 className="text-2xl font-bold text-black animate-pulse">Loading...</h1>
      </div>
    );
  }

  return (
      <div className=" relative  p-[10px] w-[500px] h-[650px] bg-white shadow-lg rounded-2xl p-5 hover:shadow-xl transition duration-300">
        <img
          src={data.image}
          alt="No image"
          className="w-full h-78 object-cover rounded-xl mb-4 cursor-pointer"
        />

        <div className="text-gray-600 space-y-1 pl-[20px] pt-[30px] flex flex-col gap-4">
          <h1 className="text-xl font-semibold text-gray-800 mb-2">
          {data.firstName} {data.lastName}
        </h1>
          <p>
            <span className="font-medium text-gray-700">Gender:</span> {data.gender}
          </p>
          <p>
            <span className="font-medium text-gray-700">Age:</span> {data.age}
          </p>
          <p>
            <span className="font-medium text-gray-700">University:</span> {data.university}
          </p>
        </div>
  <button onClick={()=>{navigate('/get')}} className='absolute bottom-10 w-[100px] h-[40px] left-50 font-semibold bg-green-600 rounded-[10px] hover:bg-green-800 text-white transition'>
        Back
        </button>
      </div>

  );
};

export default Details;
