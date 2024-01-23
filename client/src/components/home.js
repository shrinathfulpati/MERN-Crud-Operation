import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './home.css'

const Home = () => {
  const[data,setData]=useState([]);

  function fetchData(){
    axios.get('http://localhost:5001/')
    .then(res=>setData(res.data))
    .catch(err=>console.log(err))
  }

  useEffect(()=>{
    fetchData();
  })
  return (
    <div>
      <div className='header'>
      <Link to={'/create'} ><button className='addbutton'>Add Product</button></Link>
      </div>
      <div className='container'>
        {data.map((item)=>{
          return(
            <div key={item.id} className='product'>
              <h1>{item.name}</h1>
              <p>{item.desc}</p>
              <p>Rs:{item.price}</p>
              <div className='images'>
              <img src={item.images.image1} height='200px' width={'200px'} />
              <img src={item.images.image2} height='200px' width={'200px'} />
              <img src={item.images.image3} height='200px' width={'200px'} />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home