"use client"
import Image from 'next/image'
import React, { useState } from 'react'
 
 function Imageselection({selectedImage}) {
    const[file,setfile]=useState();
    const onFileSelect=(event)=>{
    console.log(event.target.files[0]);
    setfile(event.target.files[0]);
    selectedImage(event.target.files[0]);
    }

   return (
     <div>  
        <label >Select your room pic 
        </label>
        <div className='mt-3 '>
            <label htmlFor="upload-image">
                <div className={`p-28 border-rounded-xl border-dotted flex justify-center border-primary bg-slate-200 cursor-pointer hover:shadow-lg 
                ${file&&'p-0 bg-white'}
                 `}>
                 {!file? <Image  src={'/uplo.png'} alt='pic' width={150} height={150}/>
                 :<Image src={URL.createObjectURL(file)} width={300} height={300}
                 className='w-[250px] h-[250px] object-cover'
                 />}
                </div>
            </label>
            <input type='file' accept='image/*' id='upload-image'
            style={{display:"none"}}
            onChange={onFileSelect}
            alt='room pic'
            />
            
        </div>
     </div>
   )
 }
 
 export default Imageselection