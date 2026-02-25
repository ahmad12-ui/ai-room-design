"use client"
import { useUser } from '@clerk/nextjs'
import axios from 'axios';
import React, { useEffect , useState} from 'react'
import { userDetailContext } from './_context/userDetailContext';

function provider({children}) {

  const {user} =useUser();
  const [userDetail , setUserDetail]=useState([]);

  useEffect(()=>{
    user&&VerifyUser();
  },[user])

  const VerifyUser=async()=>{
      const dataResult = await axios.post('/api/verify-user',{
        user:user
      });
      setUserDetail(dataResult.data.result);
      console.log(dataResult.data);
  }

  return (
    <userDetailContext.Provider value={{userDetail , setUserDetail}}>
    <div>{children}</div>
    </userDetailContext.Provider>
  )
}

export default provider

