import React, { useState } from 'react'
import useForm from '../../hooks/useForm'

export default function VentaPage() {





  const { cantidad,descripcion,precio,changeform} = useForm({
    cantidad: 15,
    codigo: "EM_01",
    descripcion: "Hotdog 6 unidades",
    precio: 15
  })

  // const { stock,codigo,descripcion,precio}=producto
  return (
    <div className='formulario'>

      <div className="form form_desc">
        <label className="">Descripcion</label>
        <input type="text" id='desc'  name='descripcion' value={descripcion} onChange={changeform} placeholder='descripcion' />
      </div>
      <div className="form form_stock">
        <label className="">Stock</label>
        <input type="number" min={0} id='stock' value={cantidad} onChange={changeform} name='cantidad' placeholder='descripcion' />
      </div>
      <div className="form form_precio">
        <label className="">Precio</label>
        <input type="text" id='precio' name='precio' onChange={changeform} value={precio} placeholder='precio' />
      </div>

    </div>
  )
}
