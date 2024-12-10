import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ViewUser from '../Components/ViewUser';

function Home() {

  const [users,setUsers]=useState([])
  useEffect(()=>{
    loadusers()
  },[])

  const loadusers=async()=>{
    const result=await axios.get("http://localhost:8080/user")
    setUsers(result.data)
  }
  const deleteUser=async (id)=>{
    await axios.delete(`http://localhost:8080/user/${id}`)
    loadusers()
}
  return (
    <div className='container'>
        <div className='py-4'>
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">UserName</th>
      <th scope="col">Email</th>
      <th scope='col'>Action</th>
    </tr>
  </thead>
  <tbody>
    
  {
    users.map((user, index) => {
      return (
        <tr key={index}>
          <th scope="row"key={index}>{index + 1}</th>
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>
  <Link className='btn btn-primary mx-2' to={`/viewuser/${user.id}`}>View</Link>
</td>

          <td><Link className='btn btn-outline-primary mx-2' to={`/edituser/${user.id}`}>Edit</Link></td>
          <td><button className='btn btn-danger mx-2' onClick={()=>deleteUser(user.id)}>Delete </button></td>
        </tr>
      );
    })
  }
  
   
  </tbody>
</table>
        </div>
    </div>
  )
}

export default Home