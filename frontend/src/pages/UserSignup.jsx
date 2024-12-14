import React, { useContext } from 'react'
import { Link , useNavigate} from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { UserDataContext } from '../contexts/UserContext'

const UserSignup = () => {

  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const navigate = useNavigate();

 const { user, setUser } = useContext(UserDataContext)

  const submitHandler = async (e) => {

    e.preventDefault();

    const newUser = {
      fullName : {
        firstName: firstName,
        lastName: lastName,
      },
      email : email,
      password : password,
    };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,newUser);

    if(response.status === 201){
      const data = response.data;

      console.log(data.user);
    
      setUser(data.user);
      localStorage.setItem('token',data.token)
      navigate('/home');
      
    }

    setEmail('');
    setFirstName('')
    setLastName('')
    setPassword('')
    
  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-10' src="\public\Uber-Logo.png" alt="" />

        <form onSubmit={(e) => {
          submitHandler(e)
        }} >
            <h3 className='font-medium mb-2 text-base '>What's your Name</h3>
          <div className='flex gap-4 mb-5'>
            <input required
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value)
              }}
              type="text"
              className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-base [placeholder: text-base]'
              placeholder='First Name' />
            <input
              type="text"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value)
              }}
              className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg [placeholder: text-base]'
              placeholder='Last Name' /> 
          </div>
          <h3 className='text-base font-medium mb-2 '>What's your Email</h3>
          <input required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            type="email"
            className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg [placeholder: text-base]'
            placeholder='example@email.com' />
          <h3 className='text-base font-medium mb-2'>Enter Password</h3>
          <input
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg [placeholder: text-base]' type="password" name="" id="" placeholder='password' />

          <button className='bg-[#111111] text-white font-semibold mb-5 rouded px-4 py-2 w-full text-base placeholder:text-base'>Create Account</button>
        </form>
        <p className='text-center text-base'>New here? <Link to='/Login' className=' text-cyan-500 text-base '>Login </Link></p>
      </div>
      <div>
        <p className='p-1 text-stone-700'>Sign in as a Captain</p>
        <Link to='/Captain-signup' className='bg-[#111111] text-white flex items-center justify-center font-semibold mb-7 rouded px-4 py-2 w-full text-lg placeholder:text-base'>Captain Account</Link>
      </div>
    </div>
  )
}

export default UserSignup