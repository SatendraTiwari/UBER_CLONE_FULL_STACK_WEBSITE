import React from 'react'
import {Link} from 'react-router-dom'
const Start = () => {
  return (
    <div>
        <div className='bg-cover bg-center bg-[url(https://files.oaiusercontent.com/file-JCtzRFNPk7QhmqnDRmU3Gu?se=2024-12-10T17%3A45%3A28Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D814d6258-511f-41b9-adb1-8e4a50ad45fd.webp&sig=dVLJRxyfHVURw1kR%2Bu05ijTeeIVgwfH9P5alefACSNE%3D)] h-screen item pt-5 flex justify-between flex-col w-full bg-amber-700 '>
        <img className='w-16 ml-8' src="\public\Uber-Logo.png" alt="" />
        <div className='bg-white pb-7 py-4 px-4'>
            <h2 className='text-3xl font-bold'>Get Started Uber</h2>
            <Link to='/login' className='flex items-center justify-center w-full bg-black  text-white py-3 rounded mt-5' >Continues</Link>
        </div>
        </div>
    </div>
  )
}

export default Start


