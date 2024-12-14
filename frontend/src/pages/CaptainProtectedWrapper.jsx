import axios from 'axios';
import React,{useEffect, useContext, useState} from 'react'
import {useNavigate } from 'react-router-dom'
import {CaptainDataContext} from '../contexts/CaptainContext'
import Loader from '../components/Loader';

const CaptainProtectedWrapper =({
    children
}) => {


    const [loading, setIsLoading] = useState(true);
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const {captain,setCaptain} = useContext(CaptainDataContext);

    useEffect(() => {
      if(!token){
        navigate('/captain-login');
      }
      
      axios.get(`${import.meta.env.VITA_BASE_URL}`,{
        headers:{
          Authorization: `Bearer ${token}`
        }
      }).then(response => {
        setCaptain(response.data.captain);
        setIsLoading(false);
      }).catch(error => {
        console.log(error);
        localStorage.removeItem('token');
        navigate('/captain-login')
      })
    },[token])



    if(loading){
      return <Loader/>
    }

  return (
    <>
    {children}
    </>
  )
}

export default CaptainProtectedWrapper