

import React, { useState } from 'react'

const ImageUpload = () => {

    const [imagePreview,setPreviewImg]= useState(null);
    const [selectedFile,setSelectedFile] = useState(null)
    const [loading,setLoading]=useState(false)

    const handleImage =(e)=>{
        setPreviewImg(URL.createObjectURL(e.target.files[0]))
        setSelectedFile(e.target.files[0])
    }

    const uploadImage = async(e)=>{
        e.preventDefault();

        if(!selectedFile){
            alert("select files first")
            setLoading(false)
        }
        setLoading(true)

        try {
            const formData = new FormData();
            formData.append('file',selectedFile);
            formData.append('upload_preset','le0w7ev3');
 
            const response = await fetch('https://api.cloudinary.com/v1_1/dno1deskb/image/upload',{
             method:'post',
             body:formData
            });

            const data = await response.json()
            console.log(data.secure_url)
        } catch (error) {
            console.log("error in uploading image ",error)
        }finally{
            setLoading(false)
        }

    }

  return (

    <div>
        <form onSubmit={uploadImage}>
            <label htmlFor="image">
                <input type="file" accept='image/png,image/jpeg,image/jpg' name='image' onChange={handleImage} />
            </label>
            {loading ?<h1>UpLoading...</h1>
            :
            <button type='submit' >Upload</button>
            }
        </form>

        <div>
        {imagePreview && (
            <img src={imagePreview && imagePreview} alt="profile" />
           )}
        </div>
    </div>
   
  )
}

export default ImageUpload