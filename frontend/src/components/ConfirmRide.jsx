import React from 'react'

const ConfirmRide = (props) => {
    return (
        <div>
            <h5 ref={props.confirmRidePanelCloseRef}
                onClick={() => {
                    props.setConfirmRidePanel(false);
                }}
                className=' opacity-0 absolute right-6 top-6 text-2xl'><i className="ri-arrow-down-wide-line"></i></h5
            >
            <h3 className='text-2xl font-semibold mb-5'>Confirm Your Ride</h3>

            <div className='flex justify-between flex-col items-center'>
                <img className='h-22' src="\public\white_car.png" alt="" />
                {/* Detail div */}
                <div className='w-full '>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className=" text-xl  ri-map-pin-2-fill"></i>
                        {/* Captain Location  */}
                        <div>
                            <h3 className='text-lg font-bold '>562/11-A</h3>
                            <p className='text-base text-gray-600 -mt-1'>Kankariya Talab, Bhopal</p>
                        </div>
                    </div>
                    {/* User Location */}
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="text-xl ri-map-pin-add-line"></i>
                        <div>
                            <h3 className='text-lg font-bold '>562/11-E</h3>
                            <p className='text-base text-gray-600 -mt-1'>MP Nager Bhopal</p>
                        </div>
                    </div>

                    {/* Payment  */}
                    <div className='flex items-center gap-5 p-3'>
                        <i className=" text-xl ri-bank-card-2-fill"></i>
                        <div>
                            <h3 className='text-lg font-bold '>₹193.20</h3>
                            <p className='text-base text-gray-600 -mt-1'>Cash</p>
                        </div>
                    </div>
                </div>
                <button
                onClick={() => {
                    props.setVehicleFound(true);
                    props.setConfirmRidePanel(false);
                }}
                className='w-full bg-green-400 text-white font-semibold p-2 rounded-lg mt-5 '>Confirmed</button>
            </div>
        </div>
    )
}

export default ConfirmRide