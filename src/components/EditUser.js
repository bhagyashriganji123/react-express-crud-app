import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const EditUser = () => {
  const {id}=useParams();
  const [user,setUser]=useState();
  useEffect(()=>{
    axios.get(`http://localhost:5000/api/users/${id}`)
    .then((res)=>{
      setUser(res.data.data);
    })
    .catch((error)=>{
      console.log(error);
    })
    // console.log("USer",user);
  },[user,id]);
  return (
   
    <div>
      <h1>{id}</h1>
    </div>
  )
}

export default EditUser
