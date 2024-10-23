import React from 'react'
import Shopping from '../assets/Shopping.jpg'


const Home = () => {
  return (
    <>
    <div >
        
    <img src={Shopping} alt='shopping' style={{width:1500, height:650}} />
    <h1 style={{marginTop:-500 , marginLeft:700, fontSize:50}} className='font-semibold '>SHOPPING TIME</h1>
    <button className="btn btn-secondary mt-7" style={{marginLeft:850}}><a href='login'>LOGIN</a></button>
    </div>
    </>
  )
}

export default Home