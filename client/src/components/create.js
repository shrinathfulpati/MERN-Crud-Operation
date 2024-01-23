import React, { useState } from 'react'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'

const Create = () => {
  const[product,setProduct]=useState({
    name:'',
    price:'',
    desc:'',
    images:{
      image1:'',
      image2:'',
      image3:'',
    }
  })

  const navigate=useNavigate();

  const handleChange = event => {
    const { name, value } = event.target;

    // Check if the input name contains dot (.) indicating nested property
    if (name.includes('.')) {
      const [nestedProperty, nestedKey] = name.split('.');
      setProduct(prevData => ({
        ...prevData,
        [nestedProperty]: {
          ...prevData[nestedProperty],
          [nestedKey]: value,
        },
      }));
    } else {
      setProduct(prevData => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  function handleSubmit(e){
    e.preventDefault();
    const{name,price,desc,images}=product;
    // console.log({name,price,desc,images})
    axios.post('http://localhost:5001/create',product)
    .then(res=>{
      console.log(res)
      navigate('/');
    })
    .catch(err=>console.log(err))
  } 

  return (
    <div>
      <input type='text' name='name' value={product.name}  onChange={handleChange} />
      <input type='text' name='price' value={product.price} placeholder='Enter Product Price ' onChange={handleChange} />
      <input type='text' name='desc' value={product.desc} placeholder='Enter Product Desc ' onChange={handleChange} />
      <input type='text' name="images.image1" value={product.images.image1}  onChange={handleChange} />
      <input type='text' name='images.image2' value={product.images.image2} placeholder='Enter Product Image2 url  ' onChange={handleChange} />
      <input type='text' name='images.image3' value={product.images.image3} placeholder='Enter Product Image3 url  ' onChange={handleChange} />
      <button type='submit' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Create