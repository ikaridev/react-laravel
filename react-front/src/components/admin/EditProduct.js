import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/product/'

export const EditProduct = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState (0)
    const [stock, setStock] = useState (0)
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${endpoint}${id}`, {
            name: name,
            description: description, 
            price: price, 
            stock: stock
        })
        navigate('/admin/')
    }

    useEffect( () => {
        const getProductById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            setName(response.data.name)
            setDescription(response.data.description)
            setPrice(response.data.price)
            setStock(response.data.stock)
        }
        getProductById()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
    <div className='container colapse border border-1 rounded p-4 my-4 text-start'>
        <h3 className='my-4'>Editar producto</h3>
        <form onSubmit={update}>
        <div className='my-4'>
                <label className='form-label'>Nombre</label>
                <input className='form-control'
                value={name}
                onChange={ (e)=> setName(e.target.value)}
                name='name'
                type='text'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Descripción</label>
                <input className='form-control'
                value={description}
                onChange={ (e)=> setDescription(e.target.value)}
                name='description'
                type='text'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Precio</label>
                <input className='form-control'
                value={price}
                onChange={ (e)=> setPrice(e.target.value)}
                name='price'
                type='number'
                step='any'
                min={0.1}
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Stock</label>
                <input className='form-control'
                value={stock}
                onChange={ (e)=> setStock(e.target.value)}
                name='stock'
                type='number'
                />
            </div>
            <button type='submit' className='btn btn-primary btn-sm my-4'>Actualizar producto</button>
        </form>
    </div>
    )
}