import React, { useReducer, useRef, useState } from 'react'
import gsap from 'gsap';
import {useGSAP} from '@gsap/react'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfirmRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingDriver from '../components/WaitingDriver';

const Home = () => {

  const [pickup, setPickup] = useState();
  const [destination, setDestination] = useState();
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanelOpen,setVehiclePanelOpen] = useState(false);
  const [confirmRidePanel,setConfirmRidePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriverPanel,setWaitingForDriverPanel] = useState(false)

  const waitingForDriverPanelRef = useRef(null);
  const waitingForDriverPanelCloseRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const vehicleFoundCloseRef = useRef(null);
  const confirmRidePsnelRef = useRef(null);
  const confirmRidePanelCloseRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const VehiclePanelClose = useRef(null);
  const panelRef = useRef(null);
  const panelClose = useRef(null);
  const submitHandler = (e) => {
    e.preventDefault();
    
  }


  useGSAP(function() {
    if(panelOpen){
      gsap.to(panelRef.current,{
        height:'70%',
        opacity:1,
        padding: 20
      })
      gsap.to(panelClose.current,{
        opacity: 1,
      })
    }else{1
      gsap.to(panelRef.current,{
        height: '0%',
        opacity:0,
        padding: 0
      })
      gsap.to(panelClose.current,{
        opacity: 0
      })
    }
  },[panelOpen]);


  // Vehicle Panel 

  useGSAP(function() {
    if(vehiclePanelOpen){
      gsap.to(vehiclePanelRef.current,{
        transform: 'translateY(0)'
      })
      gsap.to(VehiclePanelClose.current,{
        opacity: 1
      })
    }else{
      gsap.to(vehiclePanelRef.current,{
        transform: 'translateY(100%)'
      })
      gsap.to(VehiclePanelClose.current,{
        opacity:0
      })
    }
  },[vehiclePanelOpen])



// confirm Ride Panel

  useGSAP(function() {
    if(confirmRidePanel){
      gsap.to(confirmRidePsnelRef.current,{
        transform: 'translateY(0)'
      })
      gsap.to(confirmRidePanelCloseRef.current,{
        opacity: 1
      })
    }else{
      gsap.to(confirmRidePsnelRef.current,{
        transform: 'translateY(100%)'
      })
      gsap.to(confirmRidePanelCloseRef.current,{
        opacity:0
      })
    }
  },[confirmRidePanel])

//Looking for a driver and wait a user Panel
  useGSAP(function() {
    if(vehicleFound){
      gsap.to(vehicleFoundRef.current,{
        transform: 'translateY(0)'
      })
      gsap.to(vehicleFoundCloseRef.current,{
        opacity: 1
      })
    }else{
      gsap.to(vehicleFoundRef.current,{
        transform: 'translateY(100%)'
      })
      gsap.to(vehicleFoundCloseRef.current,{
        opacity: 0
      })
    }
  },[vehicleFound])

//Waiting for Driver Panel 

useGSAP(function() {
  if(waitingForDriverPanel){
    gsap.to(waitingForDriverPanelRef.current,{
      transform: 'translateY(0)'
    })
    gsap.to(waitingForDriverPanelCloseRef.current,{
      opacity: 1
    })
  }else{
    gsap.to(waitingForDriverPanelRef.current,{
      transform: 'translateY(100%)'
    })
    gsap.to(waitingForDriverPanelCloseRef.current,{
      opacity: 0
    })
  }
},[waitingForDriverPanel])


  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src="\public\Uber-Logo.png" alt="" />

      <div className='h-screen  w-screen'>
        {/* Image for Temprarry */}
        <img className='h-full w-full object-fill' src="\public\uber_map_.gif" alt="" />
      </div>

      <div className='flex flex-col justify-end h-screen  absolute top-0 w-full '>
        <div className='h-[30%] p-5 bg-white relative'>
          <h5 ref={panelClose} onClick={() => {
            setPanelOpen(false);
          }} className='opacity-0 absolute right-6 top-6 text-2xl'><i className="ri-arrow-down-wide-line"></i></h5>
          <h4 className='text-3xl font-semibold'>Find a trip</h4>
          <form onSubmit={(e) => {  
            submitHandler(e);
           }}>
            <div className="line absolute h-14 w-1 top-[45%] left-10 bg-gray-900 rounded-full "></div>
            <input
            onClick={() => {
              setPanelOpen(true)
            }}
            value={pickup}
            onChange={(e) => {
              setPickup(e.target.value);
            }}
            className='bg-[#eee] px-8 py-2 text-lg rounded-lg w-full mb-3 mt-9 p-5' type="text" placeholder='Add a pick-up Location' />
            <input
            onClick={() => {
              setPanelOpen(true)
            }}
            value={destination}
            onChange={(e) => {
              setDestination(e.target.value);
            }}
            className='bg-[#eee] px-8 py-2 text-lg rounded-lg w-full mb-1 mt-3 p-5' type="text" placeholder='Enter your destination' />
          </form>
        </div>
        <div ref={panelRef} className='bg-white opacity-0 h-0'>
          <LocationSearchPanel vehiclePanelOpen = {vehiclePanelOpen} setVehiclePanelOpen = {setVehiclePanelOpen}  setPanelOpen = {setPanelOpen}/>
        </div>


      </div>


      {/* ride selection pnale*/}

      <div ref={vehiclePanelRef} className='fixed z-10 bottom-0  bg-white w-full p-3 py-8 translate-y-full px-3 pt-12'>
        <VehiclePanel setVehiclePanelOpen = {setVehiclePanelOpen} VehiclePanelClose = {VehiclePanelClose} setConfirmRidePanel ={setConfirmRidePanel} />
      </div>

      {/* confrim ride panel */}

      <div ref={confirmRidePsnelRef} className='fixed z-10 bottom-0  bg-white w-full p-3  translate-y-full px-3 py-10 pt-12 '>
        <ConfirmRide confirmRidePanelCloseRef={confirmRidePanelCloseRef} setConfirmRidePanel={setConfirmRidePanel}
        setVehicleFound={setVehicleFound}
        />
      </div>

      <div ref={vehicleFoundRef} className='fixed z-10 bottom-0  bg-white w-full p-3  translate-y-full px-3 py-10 pt-12 '>
        <LookingForDriver vehicleFoundCloseRef={vehicleFoundCloseRef} setVehicleFound={setVehicleFound}/>
      </div>


      <div ref={waitingForDriverPanelRef} className='fixed z-10 bottom-0  bg-white w-full p-3  translate-0 px-3 py-10 pt-12 '>
       <WaitingDriver waitingForDriverPanelCloseRef={waitingForDriverPanelCloseRef} setWaitingForDriverPanel={setWaitingForDriverPanel}/>
      </div>

    </div>
  )
}

export default Home


// confirmRidePanel={confirmRidePanel} setConfirmRidePanel={setConfirmRidePanel}
//         confirmRidePsnelRef={confirmRidePsnelRef}
//         confirmRidePanelCloseRef={confirmRidePanelCloseRef}