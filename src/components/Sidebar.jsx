import React, { useState } from 'react';

const Sidebar = () => {
  // State to manage the visibility of dropdowns
  const [isDepartmentsOpen, setIsDepartmentsOpen] = useState(false);
  const [isAddEmployeeOpen, setIsAddEmployeeOpen] = useState(false);

  // Toggle functions for each dropdown section
  const toggleDepartments = () => setIsDepartmentsOpen(!isDepartmentsOpen);
  const toggleAddEmployee = () => setIsAddEmployeeOpen(!isAddEmployeeOpen);

  return (
    <div className='flex flex-col w-[15%] h-screen p-6 bg-gray-800 text-white border-r border-gray-700'>
      {/* Departments Section with Dropdown */}
      <div className='border-b border-gray-700 pb-4 mb-4 text-lg font-semibold'>
        <div 
          onClick={toggleDepartments} 
          className="cursor-pointer hover:text-blue-400"
        >
          Departments
        </div>
        {/* Dropdown content for Departments */}
        <div className={`${isDepartmentsOpen ? 'block' : 'hidden'} pl-5`}>
          <div className='cursor-pointer hover:text-blue-400'>Kitchen</div>
          <div className='cursor-pointer hover:text-blue-400'>Service</div>
          <div className='cursor-pointer hover:text-blue-400'>Management</div>
        </div>
      </div>

      {/* Add Employee Section with Dropdown */}
      <div className='border-b border-gray-700 pb-4 mb-4 text-lg font-semibold'>
        <div 
          onClick={toggleAddEmployee} 
          className="cursor-pointer hover:text-blue-400"
        >
          Add Employee
        </div>
        {/* Dropdown content for Add Employee */}
        <div className={`${isAddEmployeeOpen ? 'block' : 'hidden'} pl-5`}>
          <div className='cursor-pointer hover:text-blue-400'>Add New</div>
          <div className='cursor-pointer hover:text-blue-400'>Manage Employees</div>
        </div>
      </div>

      {/* Add more sections here if needed */}
      <div className='border-b border-gray-700 pb-4 mb-4 text-lg font-semibold hover:text-blue-400'>
        <div>Other Section</div>
      </div>
    </div>
  );
};

export default Sidebar;
