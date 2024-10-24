import React, { useEffect, useState, } from 'react'
import Daniya from '../Components/Daniya';

const SingleProduct = () => {
  const [product, setProduct] = useState(null);

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then((res) => {
            console.log(res.product)
            setProduct(res.product)
        })
        .catch(err => {
            console.log(err)
            setError(true)
        }).finally(() => {
            setLoading(false)
        })
}, [])

  return (
    <>
      <h1 className='text-center text-4xl font-semibold mt-3'>DESCRIPTION</h1>
            {loading && <div className='flex h-[80vh] justify-center items-center'>
                <span className="loading loading-spinner text-primary loading-lg"></span>
            </div>}
            {error && <h1>Error occured</h1>}
            <div className='flex justify-center gap-5 flex-wrap m-5'>
                {product && product.map((item, index) => {
                    return <Daniya title={item.title} src={item.thumbnail} description={item.description} />
                })}
            </div>
        </>

    
    
  )
}

export default SingleProduct