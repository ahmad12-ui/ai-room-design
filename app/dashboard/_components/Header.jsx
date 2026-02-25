"use client"
import { UserButton } from '@clerk/clerk-react'
import Image from 'next/image'
import React, { useContext } from 'react'
import { userDetailContext } from '@/app/_context/userDetailContext'
import { Button } from '@/components/ui/button'

function Header() {
    const {userDetail , setUserDetail}=useContext(userDetailContext);
  return (
    <div className='p-5 shadow-sm flex justify-between items-center'>
        <div className='flex gap-2 items-center'>
        <Image src={'/logo.png'} alt='logo'width={40} height={40}/>
        <h2 className='font-bold text-lg'>AI Room Design</h2>
        </div>
        <Button variant='ghost' className="rounded-full text-primary">Buy More Credits</Button>
        <div className='flex gap-7 items-center'>
            <div className='flex gap-2 items-center bg-slate-200 px-3 rounded-full'>
                <img src={'/star.png'} alt='star' width={25} height={25}/>
                <h2>{userDetail?.credits}</h2>
            </div>
            <UserButton/>

        </div>
        

    </div>
  )
}

export default Header