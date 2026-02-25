
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

function Emptystate() {
  return (
    <div className='flex pt-10 items-center justify-center mt-10 flex-col'>
      <h2>Create New Design</h2>
      <Image src={'/logo.png'} alt='pic' width={200} height={200}/>
      <Link href={'/dashboard/create-new'}>
        <Button>+ desing Room</Button>
      </Link>
    </div>
  )
}

export default Emptystate