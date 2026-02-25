import React from 'react'
import Image from 'next/image'
import {
    AlertDialog,
    AlertDialogContent,
  } from "@/components/ui/alert-dialog"
  
function CustomLoading({loading}) {
  return (
    <AlertDialog open={loading}>
        <AlertDialogContent>
            <div className='bg-white flex flex-col items-center my-10 justify-center'>
               <Image src={'/output-onlinegiftools (1).gif'} alt='loading' width={100} 
               height={100}/> 
                <h2>Redesigning your room... Do not refresh</h2>
               
            </div>
    
        </AlertDialogContent>
</AlertDialog>

  )
}

export default CustomLoading
