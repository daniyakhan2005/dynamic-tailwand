import React from 'react'

const Card = ({title , price , src , description}) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={src}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>Rs:{price}</p>
    <p>description:{description.slice(0,20)}........</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary" ><a href='products'>SHOW MORE.....</a></button>
    </div>
  </div>
</div>
  )
}

export default Card