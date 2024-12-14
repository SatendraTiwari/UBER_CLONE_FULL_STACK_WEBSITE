import React from 'react'

const WaitingDriver = (props) => {
  return (
    <div>
            <h5 ref={props.waitingForDriverPanelCloseRef}
                onClick={() => {
                    props.waitingForDriverPanelRef(false);
                }}
                className=' opacity-0 absolute right-6 top-6 text-2xl'><i className="ri-arrow-down-wide-line"></i></h5
            >
            <h3 className='text-2xl font-semibold mb-5'>Waiting For Riders</h3>

            <div className='flex items-center justify-between'>
            <img className='h-20' src="\public\white_car.png" alt="" />
            <div>
              <h2 className='text-lg font-bold '>Sattu</h2>
              <h4 className='text-lg font-bold'>MP09BA1098</h4>
              <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
            </div>
            </div>

            <div className='flex justify-between flex-col items-center'>
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

            </div>
        </div>
  )
}

export default WaitingDriver