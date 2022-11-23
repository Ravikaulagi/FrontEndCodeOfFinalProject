
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
export default function Home() {
    const [users,setUsers]=useState([]);

    const {id}=useParams();

    useEffect(()=>{
        loadUsers();

    },[]);

    const loadUsers=async ()=>{
        const result=await axios.get("http://localhost:8080/api/test/edcation");
        setUsers(result.data);
    }

    const deleteUser=async(id)=>{
      await axios.delete(`http://localhost:8080/api/test/education/${id}`);
      loadUsers();
    }



    return (
        <div className='container'>
            <div className='py-4'>
            <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">HospitalName</th>
      <th scope="col">PhoneNo</th>
      <th scope="col">Address</th>
    </tr>
  </thead>
  <tbody>
    { 
    users.map((user,index)=>{
     return(   <tr>
      <th scope="row" key={index}>{index+1}</th>
      <td>{user.instituteName}</td>
      <td>{user.phoneNo}</td>
      <td>{user.address}</td>
      <td>
        <Link className='btn btn-primary mx-2' to={`/education/${user.id}`}>View</Link>
        <Link className='btn btn-outline-primary mx-2' to={`/education/${user.id}`}>Edit</Link>
        <button className='btn btn-danger mx-2' onClick={()=>deleteUser(user.id)}>Delete</button>
      </td>
    </tr>)
})}
  </tbody>
</table>
            </div>
            
        </div>
    )
}