import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useNavigate, useParams} from 'react-router-dom';
import { Navigate } from 'react-router-dom';


const Edit = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [salery, setSalery] = useState('');


    const [userData, setUserData] = useState({
        name: '',
        email: '',
        age: '',
        salery: ''
    })
    const {id}= useParams()
    
    const [prevData,setPrevData]=useState({})

    
    useEffect(()=>{
       const fetchData = async()=>{
        const userData= await Axios.get(`http://localhost:3000/user/${id}`)
        console.log(userData.data)
        setUserData(userData.data)
        setPrevData(userData.data)
       }
       fetchData()

        
    },[id])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const navigate=useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
    
        try {
            const response = await Axios.put(`http://localhost:3000/edit/${id}`,userData)
           // console.log("response", response.data);
           .then((res)=>{
            navigate("/")
           })
           setPrevData(response.data)
         
            
        } catch (err) {
            console.error(err);
        }
        
    };

    return (
        <div className=' w-[600px] mx-auto'>
            <div>
                <h2 className=' font-bold text-center mb-5'>Edit Users Detail</h2>
                <form onSubmit={handleSubmit} >
                    <div className=' mb-5 border border-sky-500 rounded-lg'>
                        <input type="text"  value={userData.name} name='name' placeholder='Enter name...' onChange={handleChange} 
                        className=' w-[100%] bg-orange-100 text-black px-4 py-2 rounded-lg' />
                    </div>
                    
                    <div className=' mb-5 border border-sky-500 rounded-lg'>
                        <input type="text"  value={userData.email} name='email' placeholder='Enter email...' onChange={handleChange} 
                        className=' w-[100%] bg-orange-100 text-black px-4 py-2 rounded-lg' />
                    </div>
                    
                    <div className=' mb-5 border border-sky-500 rounded-lg'>
                        <input type="number"  value={userData.age}name='age' placeholder='enter age...' onChange={handleChange}
                        className=' w-[100%] bg-orange-100 text-black px-4 py-2 rounded-lg' />
                    </div>
                    
                    <div className=' mb-5 border border-sky-500 rounded-lg'>
                        <input type="number"  value={userData.salery} name='salery' placeholder='enter salery...'onChange={handleChange}
                        className=' w-[100%] bg-orange-100 text-black px-4 py-2 rounded-lg' />
                    </div>
                    
                    <button type="submit" className=' bg-green-500 mb-2'>Update</button>
                </form>
            </div>

         
        </div>
    );
};

export default Edit;