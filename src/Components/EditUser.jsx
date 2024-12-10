import axios from 'axios';
import  { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export const EditUser = () => {
const {id} = useParams()
    let navigate=useNavigate()
    const [user,setUser]=useState({
        name:"",
        username:"",
        email:""
    });

    const onSubmit=async (e)=>{
e.preventDefault();
await axios.put(`http://localhost:8080/user/${id}`,user)
navigate("/")
    }

    const loadUser=async ()=>{
        const result = await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data)
    }
   
    useEffect(()=>{
        loadUser()
    },[])
    const onInputchange= (e)=>{
          setUser({...user,[e.target.name]:e.target.value})
    }

    const {name,username,email}=user
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4 '>Edit User</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className='mb-3'>
                    <label htmlFor="Name" className='form-label'>Name</label>
                    <input value={name} onChange={(e)=>onInputchange(e)}type="{text}" name="name" id="" className='form-control' placeholder="Enter your Name"/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="Username" className='form-label'>Username</label>
                    <input value={username} onChange={(e)=>onInputchange(e)} type="{text}" name="username" id="" className='form-control' placeholder="Enter your UserName"/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="Email" className='form-label'>E-mail</label>
                    <input  value={email} onChange={(e)=>onInputchange(e)} type="{text}" name="email" id="" className='form-control' placeholder="Enter your Email"/>
                </div>
                <button type='submit' className='btn btn-outline-primary'>Submit</button>
                <Link  to={"/"} className='btn btn-outline-danger mx-2'>Cancel</Link>
                </form>
                </div>
               
                 </div>
    </div>
  )
}
