import React from 'react'

const Login = () => {
  return (
    <>
    <div className='flex justify-center items-center h-screen' 
      style={{ 
            backgroundImage: 'url(https://img.freepik.com/premium-photo/high-angle-view-chopped-vegetables-table_1048944-228852.jpg)', 
            backgroundSize: 'cover', // Ensure it covers the screen
            backgroundPosition: 'center' // Center the background
          }}>
     <div className='items-center bg-orange-600 p-10 m-20 rounded-lg shadow-lg  '>
        <div className='space-y-4'>
                <input 
                  type="text" 
                  id="user_name" 
                  placeholder='Username' 
                  className='w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' 
                />

                <input 
                  type="password" 
                  id="password" 
                  placeholder='Password' 
                  className='w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' 
                />
                
                <a href="" className='flex justify-end text-white font-normal text-md'>Forgot password?</a>
                
                <button className='w-full p-3 bg-blue-700 text-white rounded-lg mt-4'>Login</button>
        </div>
      </div>  
    </div>
   
    </>
  )
}

export default Login