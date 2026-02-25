"use client"
import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import Emptystate from './Emptystate';
import Link from 'next/link';
import { db } from '@/config/db';
import { AiGeneratedImage } from '@/config/schema';
import { eq } from 'drizzle-orm';
import RoomDesignOutput from './RoomDesignOutput';

function Listing() {
  const { user } = useUser();
  const [userRoomlist, setUserRoomlist] = useState([]);

  useEffect(() => {
    if (user) gEtUserRoomList();
  }, [user]);

  const gEtUserRoomList = async () => {
    const result = await db.select().from(AiGeneratedImage)
      .where(eq(AiGeneratedImage.userEmail, user?.primaryEmailAddress?.emailAddress));

    setUserRoomlist(result);
    console.log(result);
  };

  return (
    <div>
      <div className='flex items-center justify-between'>
        <h2 className='font-bold text-3xl'>Hello, {user?.fullName}</h2>
        <Link href={'/dashboard/create-new'}>
          <Button>+ Design Room</Button>
        </Link>
      </div>

      {userRoomlist?.length === 0 ?
        <Emptystate /> :
        <div className='mt-10'>
          <h2 className='font-medium text-primary text-xl mb-10'>Room Studio</h2>
          {/* Listing */}
          <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {userRoomlist.map((room, index) => {
              return <RoomDesignOutput key={index} room={room} />;
            })}
          </div>
        </div>
      }
    </div>
  );
}

export default Listing;
