import React from 'react'

const Daniya = () => {
  return (
    <div className="card bg-base-100 image-full w-96 shadow-xl">
    <figure>
      <img
        src={src}
        alt="Shoes" />
    </figure>
    <div className="card-body">
      <h2 className="card-title"> title={title}</h2>
      <p> description={description}</p>
    </div>
  </div>
  )
}

export default Daniya