import React from 'react'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div>
        <div className='bg-cover bg-center bg-[url(https://as2.ftcdn.net/v2/jpg/05/74/58/89/1000_F_574588929_c0AskWRvvz0bfALn0Rix7xdNiKIF2OhQ.jpg)] h-screen item pt-5 flex justify-between flex-col w-full bg-amber-700'>
        <img className='w-16 ml-8' src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo.png" alt="" />
        <div className='bg-white pb-7 py-4 px-4'>
            <h2 className='text-3xl font-bold'>Get Started Uber</h2>
            <Link to='/login' className='flex items-center justify-center w-full bg-black  text-white py-3 rounded mt-5' >Continues</Link>
        </div>
        </div>
    </div>
  )
}

export default Home