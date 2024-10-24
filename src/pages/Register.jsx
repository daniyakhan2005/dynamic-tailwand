import React from 'react'
import background from '../assets/background.jpg'

const Register = () => {
  return (
    <>
    <img src={background} alt='shopping' style={{width:1500, height:650}} />
    <h1 className='font-semibold ' style={{marginTop:-470 , marginLeft:350, fontSize:50}}>YOU HAVE BEEN REGISTERED</h1>
    <button style={{marginTop:40, marginLeft:600}} className="btn btn-info"><a href='product'>Click On Products</a></button>
    
    
    </>
  )
}

export default Register