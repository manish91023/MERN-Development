import React, { useState } from 'react';
import Axios from 'axios';

const AddForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [salery, setSalery] = useState('');

    const resetForm = () => {
        setName('');
        setEmail('');
        setAge('');
        setSalery('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            name,
            email,
            age,
            salery
        };

        try {
            const response = await Axios.post('http://localhost:3000/create', data);
            console.log("response", response.data);
            return response.data
            
        } catch (err) {
            console.error(err);
        }
        // Reset form fields after successful submission
            resetForm();
    };

    return (
        <div className=' w-[600px] mx-auto'>
            <div>
                <h2 className=' font-bold text-center mb-5'>Add Users Detail</h2>
                <form onSubmit={handleSubmit} >
                    <div className=' mb-5 border border-sky-500 rounded-lg'>
                        <input type="text" value={name} name='name' placeholder='Enter name...' onChange={(e) => setName(e.target.value)} 
                        className=' w-[100%] bg-orange-100 text-black px-4 py-2 rounded-lg' />
                    </div>
                    
                    <div className=' mb-5 border border-sky-500 rounded-lg'>
                        <input type="text" value={email} name='email' placeholder='Enter email...' onChange={(e) => setEmail(e.target.value)} 
                        className=' w-[100%] bg-orange-100 text-black px-4 py-2 rounded-lg' />
                    </div>
                    
                    <div className=' mb-5 border border-sky-500 rounded-lg'>
                        <input type="number" value={age} name='age' placeholder='enter age...' onChange={(e) => setAge(e.target.value)}
                        className=' w-[100%] bg-orange-100 text-black px-4 py-2 rounded-lg' />
                    </div>
                    
                    <div className=' mb-5 border border-sky-500 rounded-lg'>
                        <input type="number" value={salery} name='salery' placeholder='enter salery...' onChange={(e) => setSalery(e.target.value)}
                        className=' w-[100%] bg-orange-100 text-black px-4 py-2 rounded-lg' />
                    </div>
                    
                    <button type="submit" className=' bg-green-500 mb-2'>Add</button>
                </form>
            </div>
        </div>
    );
};

export default AddForm;