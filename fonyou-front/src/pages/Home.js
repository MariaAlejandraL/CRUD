import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {

  const [users, setUsers]=useState([]);

  const {id}=useParams()

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const result = await axios.get("http://localhost:8080/api/charactrs");
    setUsers(result.data);
    }

const deleteUser=async (id) =>{
    await axios.delete(`http://localhost:8080/api/charactr/${id}`)
    loadData();
}
  

  return (
    <div className='container'>
        <div className='py-4'>
        <table className="table border shadow">
  <thead>
    <tr>
     <th scope="col"></th>
      <th scope="col">Name</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>

    {
        users.map((user, index) =>(
    <tr>
        <th scope="row" key={index}>{index+1}</th>
      <td>{user.name}</td>
      <td><Link className="btn m-1 btn-info" to={`/view/${user.id}`} >View</Link>
      <Link className="btn m-1 btn-success"  to={`/edit/${user.id}`}>Edit</Link>
      <button className="btn m-1 btn-danger"
      onClick={() =>deleteUser(user.id)}
      >Delete</button></td>
    </tr>
        ))
    }
  </tbody>
</table>
    </div>
    </div>
  )
}
