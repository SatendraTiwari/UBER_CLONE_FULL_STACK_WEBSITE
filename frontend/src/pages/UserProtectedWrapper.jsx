import React,{useContext, useEffect, useState} from 'react'
import {useNavigate } from 'react-router-dom'
import axios from 'axios';
import { UserDataContext } from '../contexts/UserContext';
import Loader from '../components/Loader';

const  UserProtectedWrapper = ({
    children,
}) => {

    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const {uesr,setUser} = useContext(UserDataContext);


    useEffect(() => {
      if (!token) {
        navigate('/login');
      }


       axios.get(`${import.meta.env.VITA_BASE_URL}/users/profile`,{
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then(response => {
        if(response.status === 200){
          setUser(response.data.user);
          setIsLoading(false);
        }
      }).catch(error => {
        console.error(error);
        setIsLoading(false);
        navigate('/login');
      })
    },[token])

  

    if(isLoading){
      return <Loader />
    }

  return (
    <>
    {children}
    </>
  )
}

export default UserProtectedWrapper        