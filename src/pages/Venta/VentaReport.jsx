import React, { useEffect, useState } from 'react'
import useForm from '../../hooks/useForm'
import { Link } from 'react-router-dom'
import { eliminarVenta, findDateVenta, returnVenta } from '../../data/funcionVenta'
import { deleteVentaSwal } from '../components/Componente'


import iconDelete from "../../../src/assets/delete.png";



export default function VentaReport() {
  const { search, changeForm } = useForm()

  const [stockVenta, setStockVenta] = useState([])
  const Find = () => {

    const venta = findDateVenta(search)
    setStockVenta(venta)
  }
  useEffect(() => {
    const venta = returnVenta()
    setStockVenta(venta)
  }, [])

  const deleteVenta = (i) => {
    const { codigoVenta, producto } = stockVenta[i]
    deleteVentaSwal(codigoVenta, producto).then((val)=>{
      const venta = returnVenta()
      setStockVenta([...venta])
    })

  }
  useEffect(() => {
    const venta = returnVenta()
    setStockVenta(venta)
  }, [])



  return (
    <div className='stock_page'>
      <h2>Mantenimiento de Stock</h2>

      <hr />
      <div className="formulario_stock">
        <input type="date" name="search" placeholder="Buscar..." onChange={changeForm} />
        <div className="buttons">
          <button className='find' onClick={Find}>Buscar</button>
          <Link to={"./../mantenimiento"} className='vender'>
            <h4>Vender</h4>
            {/* <button className='find' onClick={Find}>Buscar</button> */}
          </Link>

        </div>
      </div>


      <div className="detalle">
        <table id='detalle-stock'>
          <thead>

            <tr>
              {/* <th>N°</th> */}
              <th>Fecha</th>
              <th>Codigo</th>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>Opcion</th>
            </tr>
          </thead>
          <tbody>

            {
              stockVenta.map(({ fecha, codigoVenta, producto, cantidad, precio }, i) => {

                return (
                  <tr key={i}>
                    <td>{fecha}</td>
                    <td>{codigoVenta}</td>
                    <td>{producto}</td>
                    <td>{cantidad}</td>
                    <td>{precio}</td>
                    <td className='delete'><img onClick={() => deleteVenta(i)} src={iconDelete}></img></td>
                  </tr>

                )

              })
            }

          </tbody>


        </table>





      </div>


    </div>
  )

}
