import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { useEffect, useState, } from 'react';
import axios from 'axios';

const Home = () => {
    const [data,setData]=useState([]);
    const navigate=useNavigate();

  useEffect(()=>{
    axios.get('http://localhost:5000/api/users')
    .then((response)=>{
        setData(response.data.data);
        // console.log(data);
    })
    .catch((error)=>{
        console.log(error);
    })

  },[data])
  const handleDelete=(user)=>{
    // e.preventDefault();
    let config={
      headers:{
        Authorization:"authToken"
      },
      data:{
        user:user
      }
    }
    axios.delete('http://localhost:5000/api/users',config)
    .then((res)=>{
      console.log(res);
      navigate('/');
    })
    .catch((error)=>{
      console.log(error);
    })
    console.log(user);
  }

  return (
    <div className='container mt-2'>
        <Link to='/addUser' className='btn btn-primary'>Add User</Link>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email ID</th>
              <th>Gender</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((user)=>{
                return(
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                    <td>{user.gender}</td>
                    <td>{user.phone}</td>
                    <td><Link to={`/editUser/${user.id}`} className='btn btn-warning ms-2'>Edit</Link>
                    <button type='submit' onClick={()=>handleDelete(user)} className='btn btn-danger ms-2'>Delete</button></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
    </div>
  )
}

export default Home
