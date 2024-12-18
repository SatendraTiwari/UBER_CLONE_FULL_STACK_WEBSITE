import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'



const CaptainLogout = async () => {

  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  await axios.get(`${import.meta.env.vITA_BASE_URL}/captain/logout`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then((response) => {
    if (response.status === 200) {

      localStorage.removeItem('token');

      navigate('/captain-login')
    }
  })

  return (
    <div>CaptainLogout</div>
  )
}

export default CaptainLogout