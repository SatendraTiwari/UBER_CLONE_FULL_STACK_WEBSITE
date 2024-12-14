import { useGSAP } from '@gsap/react';
import React,{useRef, useState} from 'react'


const LocationSearchPanel = (props) => {

    // sample array for location
    const locations = [
        "mushakhedi chourha",
        "mushakhedi chourha",
        "mushakhedi chourha",

        "mushakhedi chourha",

        "mushakhedi chourha",

    ]

  return (
    <div>
        {/* this is sample data */}

        {
            locations.map(function (location, index) {
                return <div key={index}
                onClick={() => {
                    props.setVehiclePanelOpen(true)
                    props.setPanelOpen(false)
                }} 
                className='flex gap-4 mb-7 items-center justify-start border-2 active:border-black p-3 rounded-2xl '>
                    <h2 className='bg-[#eee] flex items-center justify-center w-12 h-12 rounded-3xl ' ><i className="ri-map-pin-2-fill text-xl"></i></h2>
                    <h4 className=' font-semibold text-xl'>{location}</h4>
                </div>
            })
        }
    </div>
  )
}

export default LocationSearchPanel