import React, {useEffect, useState} from 'react'

import axios from 'axios'

export const Catalogue = () => {
    const [ products, setProducts ] = useState( [] )

    useEffect( () => {
        getAllProducts()
    }, [])


    const getAllProducts = async () => {
        const respone = await axios.get(`http://localhost:8000/api/products`)
        setProducts(respone.data)
    }

  return (
    
    <div className="album py-5 bg-light">
    <div className="container">
    
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        { products.map( (product) => (
        <div className="col">
          <div className="card shadow-sm">
            <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

            <div className="card-body text-start">
                <h5 className="">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <span className='fw-bolder'>${product.price}</span>
                    <small className="text-muted">{product.stock} unidades disponibles</small>
                </div>
            </div>
          </div>
        </div>
        ))}

      </div>
    </div>
  </div>
  )
}
