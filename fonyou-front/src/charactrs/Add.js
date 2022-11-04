import React, { useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


export default function Add() {

    let navigate=useNavigate()

 
    const [user, setUser]=useState({
        name: "",
        role: "",
        description: "",
        date: ""
    });

    const{name,role,description,date}=user

    const onInputChange = (e) => {

setUser({...user, [e.target.name]: e.target.value});
};

const onSubmit =async (e) => {
      e.preventDefault();
      await axios.post("http://localhost:8080/api/charactr", user)
      navigate("/");
};




  return <div className='container'>
    <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2'>
        <h2 className='text-center m-4'>Create Character</h2>
        <form onSubmit={(e) => onSubmit(e)}>
        <div className='mb-3'>
            <label htmlFor='Name'  className='form-label'>
                Name
            </label>
            <input type={"text"}
            className="form-control"
            placeholder='Enter name'
            name='name' 
            value={name}
            onChange={(e)=>onInputChange(e)}
            />  
        </div>
        <div className='mb-3'>
            <label htmlFor='Role'  className='form-label'>
                Role
            </label>
            <input type={"text"}
            className="form-control"
            placeholder='Assign role'
            name='role' 
            value={role}
            onChange={(e)=>onInputChange(e)}
            />
        </div>
        <div className='mb-3'>
            <label htmlFor='Description'  className='form-label'>
                Description
            </label>
            <input type={"text"}
            className="form-control"
            placeholder='Add Description'
            name='description' 
            value={description}
            onChange={(e)=>onInputChange(e)}
            />
        </div>
        <div className='mb-3'>
            <label htmlFor='Creation date'  className='form-label'>
                Creation Date YYYY-MM-DD
            </label>
            <input type={"text"}
            className="form-control"
            placeholder='Assign date'
            name='date' 
            value={date}
            onChange={(e)=>onInputChange(e)}
            />
        </div>
        <button type='submit' className='btn btn-outline-primary m-2'>Create</button>
        <Link  className='btn btn-outline-danger m-2' to='/'> Cancel </Link>
        </form>
        </div>
    </div>
  </div>
}
