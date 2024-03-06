import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const UserList = () => {
  const [users,setUsers]=useState([]);


 const tableHeaders = [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'age', label: 'Age' },
    { key: 'salery', label: 'Salery' },
 ];



 useEffect(()=>{
    const fetchUsers=async()=>{
      try {
       const data = await axios.get('http://localhost:3000/allUser')
       //console.log(data)
       console.log(data.data)
       setUsers(data.data)
      } catch (error) {
        console.log("error to fetching the data",error)
      }
    }

    fetchUsers();
 },[])



 const handleEdit = async(id)=>{
  const data = await axios.delete(`http://localhost:3000/delete/${id}`);
 

 }
 const handleDelete =async(id)=>{

    try {
      const data = await axios.delete(`http://localhost:3000/delete/${id}`);
      setUsers(users.filter(user=>user._id != id))
    } catch (error) {
      console.log("error detected ",error)
    }

 }

 return (

      <>
      <div>
        <div>
          <hr className='bg-black h-[2px]' />
          <div className='mx-auto w-[700px] bg-indigo-400 py-3'>
            <table className='w-full text-left table-auto'>
              <thead>
                <tr>
                  {tableHeaders.map((header) => (
                    <th key={header.key} className='px-4 py-2'>{header.label}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {users && users.map((row, index) => (
                  <tr key={index}>
                    {tableHeaders.map((header) => (
                    <td key={header.key} className='border px-4 py-2'>{row[header.key]}</td>
                    ))}
                    <td className='border px-4 py-2 flex'> {/* Use <td> instead of <div> */}
                    <Link to={`/edit/${row._id}`}>
                      <button className='bg-blue-400 mx-3'>Edit</button>
                    </Link>
                    <button className='bg-blue-400' onClick={() => handleDelete(row._id)}>Delete</button>
                 </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          </div>
        </div>
        
        </>
    
 );
};

export default UserList;