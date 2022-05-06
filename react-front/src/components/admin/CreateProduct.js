import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/product/'

export const CreateProduct = () => {

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState (0)
  const [stock, setStock] = useState (0)
  const navigate = useNavigate()


  const store = async (e) => {
    e.preventDefault()
    await axios.post(endpoint, {name: name, description: description, price: price, stock: stock})
    navigate('/admin/')
  }


  return (
    <div className='container colapse border border-1 rounded p-4 my-4 text-start'>
      <h3 className='my-4'>Creación de producto</h3>
      <form onSubmit={store}>
      <div className='my-4'>
          <label className='form-label'>Nombre</label>
          <input
          value={name}
          onChange={ (e)=> setName(e.target.value)}
          type='text'
          className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Descripción</label>
          <input
          value={description}
          onChange={ (e)=> setDescription(e.target.value)}
          type='text'
          className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Precio</label>
          <input
          value={price}
          onChange={ (e)=> setPrice(e.target.value)}
          type='number'
          className='form-control'
          step='any'
          min={0.1}
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Stock</label>
          <input
          value={stock}
          onChange={ (e)=> setStock(e.target.value)}
          type='number'
          className='form-control'
          />
        </div>
        <button type='submit' className='btn btn-primary btn-sm my-4'>Guardar</button>
      </form>
    </div>
  )
}
