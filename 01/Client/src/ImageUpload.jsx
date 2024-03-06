
import { Image } from 'cloudinary-react';
import React, { useState } from 'react'
import axios from 'axios'

const ImageUpload = () => {

    const [selectedFile, setSelectedFile] = useState(null);
    const [imagePreview,setImagePreview]=useState(null)
    const [isLoading,setLoading]=useState(false)

    const handleImage = (e)=>{
        setImagePreview(URL.createObjectURL(e.target.files[0]))
        setSelectedFile(e.target.files[0]); 
    }

   
    const uploadImage= async(e)=>{
        e.preventDefault(); 
        console.log("upload function called")
        if (!selectedFile) {
            alert("Please select a file to upload.");
            return;
        }
        setLoading(true);
        try {
           const formData = new FormData();
           formData.append('file',selectedFile);
           formData.append('upload_preset','le0w7ev3');

           const response = await fetch('https://api.cloudinary.com/v1_1/dno1deskb/image/upload',{
            method:'post',
            body:formData
           });

           const data = await response.json();
           console.log("image url ",data.secure_url)
        } catch (error) {
          console.log("error uploading image",error)
        }finally{
            setLoading(false)
        }
    }

  return (
    <>
    <div>Image Upload to cloudinary...</div>
    <div>
        <form onSubmit={uploadImage}>
            <p>
                <label >Photo</label>
                <input type="file" accept='image/png,image/jpeg,image/jpg' name='image' onChange={handleImage}/>
            </p>
            <p>
                {
                    isLoading?("uploading.."):(
                        <button type='submit'>
                            Upload image
                        </button>
                    )
                }
            </p>
        </form>
        <div>
           {imagePreview && (
            <img src={imagePreview && imagePreview} alt="profile" />
           )}
        </div>
    </div>
    </>

  )
}

export default ImageUpload