import React, { useState,useEffect} from 'react'
import { useParams,} from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EditUser = () => {
  const {id}=useParams();
  const [user,setUser]=useState({});
  const [fname,setFName]=useState('');
  const [lname,setLName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [gender,setGender]=useState('');
  const [phone,setPhone]=useState('');
  const navigate=useNavigate();

  useEffect(()=>{
    axios.get(`http://localhost:5000/api/users/${id}`)
    .then((response)=>{
        setUser(response.data.data);
    })
    .catch((error)=>{
        console.log(error);
    })
    //  console.log(user.id);
  },[user,id])

  const handleChange=(e)=>{
    setGender(e.target.value);
}

  const onHandleSubmit=(e)=>{
    e.preventDefault();
    const user={
      id:id,
      firstName:fname,
      lastName:lname,
      email:email,
      password:password,
      phone:phone,
      gender:gender,
    }
    axios.patch('http://localhost:5000/api/users',user)
    .then((res)=>{
      console.log(" updated Data");
      // navigate('/');
    })
    .catch((error)=>{
      console.log(error);
    })

  }

  return (
    <>
    <div className='container mt-3 col-md-5'>
      <form onSubmit={onHandleSubmit}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">First Name</label>
          <input type="text" className="form-control" id="firstName" placeholder={user.firstName} 
          onChange={(e)=>{setFName(e.target.value)}}/>

        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">Last Name</label>
          <input type="text" className="form-control" id="lastName" placeholder={user.lastName}
          onChange={(e)=>{setLName(e.target.value)}}/>

        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" placeholder={user.email}
          onChange={(e)=>{setEmail(e.target.value)}}/>

        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" onChange={(e)=>{setPassword(e.target.value)}}/>
        </div>
        <div className="mb-3" onChange={handleChange}>
          <label  className="form-label">Gender</label>
          <input type='radio' name='gender' value='male' className='form-check-input ms-2' /><label>Male</label>
          <input type='radio' name='gender' value='female' className='form-check-input ms-2' /><label>Female</label>
          <input type='radio' name='gender' value='other' className='form-check-input ms-2' /><label>Other</label>
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone</label>
          <input type="text" className="form-control" id="phone" placeholder={user.phone}
           onChange={(e)=>{setPhone(e.target.value)}}/>
        </div>


        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

    </div>
    </>
  )
}

export default EditUser
