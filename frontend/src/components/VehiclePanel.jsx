import React from 'react'

const VehiclePanel = (props) => {
    
  return (
    <div>
        <h5 ref={props.VehiclePanelClose} onClick={() => {
            props.setVehiclePanelOpen(false); 
          }} className='opacity-0 absolute right-6 top-6 text-2xl'><i className="ri-arrow-down-wide-line"></i></h5>
        <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>

        

        {/* # 1 */}

        <div
        onClick={() => {
          props.setConfirmRidePanel(true);
          props.setVehiclePanelOpen(false);
        }}
        className='flex border-2 active:border-black bg-gray-100 rounded-2xl items-center mb-2 justify-between w-full p-3'>
          <img className='h-16' src="\public\white_car.png" alt="" />
          <div className=' w-1/2 ml-2 '>
            <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-3-fill"></i>4</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-xl text-gray-400 text-xs'>Affordable, compect rides</p>
          </div>
          <h2 className='text-xl font-semibold '>₹ 193.20</h2>
        </div>

        {/* # 2 */}

        <div
        onClick={() => {
          props.setConfirmRidePanel(true);
          props.setVehiclePanelOpen(false);
        }}
        className='flex border-2 active:border-black bg-gray-100 rounded-2xl items-center mb-2 justify-between w-full p-3'>
          <img className='h-16' src="\public\Uber_Moto.png" alt="" />
          <div className=' w-1/2 ml-2 '>
            <h4 className='font-medium text-base'>Moto <span><i className="ri-user-3-fill"></i>1</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-xl text-gray-400 text-xs'>Affordable, motorcycle rides</p>
          </div>
          <h2 className='text-xl font-semibold '>₹ 65</h2>
        </div>

        {/* # 3 */}

        <div
        onClick={() => {
          props.setConfirmRidePanel(true);
          props.setVehiclePanelOpen(false);
        }}
        className='flex border-2 active:border-black bg-gray-100 rounded-2xl items-center mb-2 justify-between w-full p-3'>
          <img className='h-16' src="\public\uber_auto.png" alt="" />
          <div className=' w-1/2 ml-2 '>
            <h4 className='font-medium text-base'>UberAuto <span><i className="ri-user-3-fill"></i>3</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-xl text-gray-400 text-xs'>Affordable, Auto rides</p>
          </div>
          <h2 className='text-xl font-semibold '>₹ 118.20</h2>
        </div>
    </div>
  )
}

export default VehiclePanel