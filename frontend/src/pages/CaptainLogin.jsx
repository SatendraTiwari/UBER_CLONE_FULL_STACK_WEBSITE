import React from 'react'
import { useState } from 'react';
import {Link} from 'react-router-dom';
const CaptainLogin = () => {
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userData, setUserData] = useState({})
    const submitHander = (e) => {
        e.preventDefault();
        setUserData({
            email: email,
            password: password
        })

        console.log(userData)
        setEmail('');
        setPassword(''); 
    }
    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
                <img className='w-16 mb-10' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />

                <form onSubmit={(e) => {
                    submitHander(e);
                }}>
                    <h3 className='text-lg font-medium mb-2 '>What's your Email</h3>
                    <input required
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                        type="email"
                        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg[ placeholder: text-base]'
                        placeholder='example@email.com' />
                    <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
                    <input
                        required
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg [placeholder: text-base]' type="password" name="" id="" placeholder='password' />

                    <button className='bg-[#111111] text-white font-semibold mb-7 rouded px-4 py-2 w-full text-lg placeholder:text-base'>Login</button>
                </form>
                <p className='text-center'>New here? <Link to='/captain-signup' className=' text-cyan-500 '>Create New Captain Account</Link></p>
            </div>
            <div>
            <p className='p-1 text-slate-500'>Sign in as a User</p>
                <Link to='/Login' className='bg-[#111111] text-white flex items-center justify-center font-semibold mb-7 rouded px-4 py-2 w-full text-lg placeholder:text-base'>User Account</Link>
            </div>
        </div>
    )
}

export default CaptainLogin