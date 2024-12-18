import React, { useContext } from 'react'
import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { UserDataContext } from '../contexts/UserContext'
import axios from 'axios'


const UserLogin = () => {

    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {user,setUser} = useContext(UserDataContext);

    const navigate = useNavigate();

    const submitHander = async (e) => {
        e.preventDefault();
       const newUser = {
            email: email,
            password: password
        }

        const responece = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`,newUser)
        if(responece.status === 200){
            const data = responece.data;
            setUser(data.user);
            localStorage.setItem('token',data.token);
            navigate('/home');
        }
    }

    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
                <img className='w-16 mb-10' src="\public\Uber-Logo.png" alt="" />

                <form onSubmit={(e) => {
                    submitHander(e);
                }}>
                    <h3 className='text-lg font-medium mb-2 '>What's your Email</h3>
                    <input required
                    value={email}
                    onChange={(e) => { setEmail(e.target.value)}}
                    type="email"
                        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg [placeholder: text-base]'
                        placeholder='example@email.com' />
                    <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
                    <input
                    required
                    value={password}
                    onChange={(e) => { setPassword(e.target.value)}}
                    className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg[ placeholder: text-base]' type="password" name="" id="" placeholder='password' />

                    <button className='bg-[#111111] text-white font-semibold mb-7 rouded px-4 py-2 w-full text-lg [placeholder:text-base]'>Login</button>
                </form>
                <p className='text-center'>New here? <Link to='/Signup' className=' text-cyan-500 '>Create New User Account</Link></p>
            </div>
            <div>
                <p className='p-1 text-stone-700'>Sign in as a Captain</p>
                <Link to='/Captain-login' className='bg-[#111111] text-white flex items-center justify-center font-semibold mb-7 rouded px-4 py-2 w-full text-lg [placeholder:text-base]'>Captain Account</Link>
            </div>
        </div>
    )
}

export default UserLogin