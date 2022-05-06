import React, {useEffect, useState} from 'react'
import axios from 'axios'

import {Link} from 'react-router-dom'


const endpoint = 'http://localhost:8000/api'
export const ShowProducts = () => {
    const [ products, setProducts ] = useState( [] )

    useEffect( () => {
        getAllProducts()
    }, [])


    const getAllProducts = async () => {
        const respone = await axios.get(`${endpoint}/products`)
        setProducts(respone.data)
    }

    const deleteProduct = async (id) => {
        await axios.delete(`${endpoint}/product/${id}`)
        getAllProducts()
    }
  
    return (
    <div className='container colapse'>
        <div className='d-grip gap-2 mt-4 mb-1'>
            
        </div>

        <table className=' table table-dark table-striped text-start'>
            <thead className='bg-dark text-white'>
                <tr>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Precio</th>
                    <th className='text-center'>Stock</th>
                    <th className='text-center'> <Link to="/admin/create" className='btn btn-outline-light btn-sm'>Nuevo producto</Link></th>
                </tr>
            </thead>
            <tbody>
                { products.map( (product) => (
                    <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>{product.description}</td>
                        <td>${product.price}</td>
                        <td className='text-center'>{product.stock}</td>
                        <td>
                            <div className='d-flex justify-content-center' >
                                <Link to={`/admin/edit/${product.id}`} className="btn btn-secondary m-1 btn-sm">Editar</Link>
                                <button onClick={ ()=> deleteProduct(product.id)} className="btn btn-danger m-1 btn-sm">Eliminar</button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
