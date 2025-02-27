import React from 'react'

const Sidebar = () => {
  
  return (
    <>
    <div className='flex flex-col w-[15%] h-screen p-6 bg-gray-800 text-white border-r border-gray-700'>
      <div className='border-b border-gray-700 pb-4 mb-4 text-lg font-semibold hover:text-blue-400 '>Departments
        {/* <div>Kitchen</div>
        <div>Service</div> */}
      </div>
      <div className='border-b border-gray-700 pb-4 mb-4 text-lg font-semibold hover:text-blue-400 '>add employee</div>
      {/* <div className='border-b border-gray-700 pb-4 mb-4 text-lg font-semibold hover:text-blue-400 '></div> */}
    </div>
    </>
  )
}

export default Sidebar