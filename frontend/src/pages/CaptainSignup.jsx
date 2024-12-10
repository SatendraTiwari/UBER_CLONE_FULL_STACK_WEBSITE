import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import { CaptainDataContext } from '../contexts/CaptainContext'

const CaptainSignup = () => {
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const [color, setColor] = useState('');
  const [plateNumber,setPlateNumber] = useState('');
  const [capacity,setCapacity] = useState( );
  const [vehicleType, setVehicleType] = useState('');

  const {captain, setCaptain} = React.useContext(CaptainDataContext); 
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const newCaptain = {
      fullName : {
        firstName: firstName,
        lastName: lastName
      },
      email : email,
      password : password,
      vehicle : {
        color : color,
        plateNum : plateNumber,
        capacity : capacity,
        vehicleType : vehicleType
      }
    }


    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`,newCaptain)

    if(response.status === 201){
      const data = response.data
      setCaptain(data.captain)
      localStorage.setItem('token',data.token)
      navigate('/captain-home')
    }

  
    setEmail('');
    setFirstName('')
    setLastName('')
    setPassword('')
    setColor('')
    setPlateNumber('')
    setCapacity('')
    setVehicleType('')
  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
      <img className='w-16 mb-10' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />

        <form onSubmit={(e) => {
            submitHandler(e);
        }}>
            <h3 className='font-medium mb-2 text-base '>What's your Name</h3>
          <div className='flex gap-4 mb-5'>
            <input required
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              type="text"
              className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-base [placeholder: text-base]'
              placeholder='First Name' />
            <input
              type="text"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg [placeholder: text-base]'
              placeholder='Last Name' /> 
          </div>
          <h3 className='text-base font-medium mb-2 '>What's your Email</h3>
          <input required
            value={email}
            onChange={(e) => {
                setEmail(e.target.value);
            }}
            type="email"
            className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg [placeholder: text-base]'
            placeholder='example@email.com' />
          <h3 className='text-base font-medium mb-2'>Enter Password</h3>
          <input
            required
            value={password}
            onChange={(e) => {
                setPassword(e.target.value);
            }}
            className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg [placeholder: text-base]' type="password" name="" id="" placeholder='password' />


            {/* Vehicle Details  */}

            <h3 className='text-base font-medium mb-2'>Enter Vehicle Details</h3>
          <div className='flex gap-4 mb-5'>
            <input required
              value={color}
              onChange={(e) => {
                setColor(e.target.value);
              }}
              type="text"
              className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-base [placeholder: text-base]'
              placeholder='Color' />
            <input
              type="text"
              value={plateNumber}
              onChange={(e) => {
                setPlateNumber(e.target.value);
              }}
              className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg [placeholder: text-base]'
              placeholder='Plate Number' />
              </div>
              <div className='flex gap-4 mb-5'>
              <input
              type="number"
              value={capacity}
              onChange={(e) => {
                setCapacity(e.target.value);
              }}
              className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg [placeholder: text-base]'
              placeholder='Setting Capacity' /> 

              <select

              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value);
              }}
              className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg [placeholder: text-base]'
              placeholder='vehicleType'>
                <option value="" disabled>Select Vahicle Type</option>
                <option value="car">Car</option>
                <option value="auto">Auto</option>
                <option value="moto">Moto</option>
              </select>

          </div>


          <button className='bg-[#111111] text-white font-semibold mb-5 rouded px-4 py-2 w-full text-base placeholder:text-base'>Sign up</button>
        </form>
        <p className='text-center text-base'>New here? <Link to='/Login' className=' text-cyan-500 text-base '>Login </Link></p>
      </div>
      <div>
        {/* Term and privecy */}
      </div>
    </div>
  )
}

export default CaptainSignup