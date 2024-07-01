import React, { useEffect, useState } from 'react'
import useForm from '../../hooks/useForm'
import { returnVenta } from '../../data/funcionVenta'

export default function VentaReport() {
  const { search, changeForm } = useForm({ search: '' })
  
  const [stockVenta, setStockVenta] = useState([])
  const Find = () => {
    console.log(stockVenta);

    const venta = findById(search)
    setStockVenta(venta)
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
        <input type="text" name="search" placeholder="Buscar..." onChange={changeForm} />
        <div className="buttons">
          <button className='find' onClick={Find}>Buscar</button>

        </div>
      </div>


      <div className="detalle">
        <table id='detalle-stock'>
          <thead>

            <tr>
              {/* <th>N°</th> */}
              <th>Codigo</th>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Opcion</th>
            </tr>
          </thead>
          <tbody>

            {
              stockVenta.map(({ codigoVenta,producto,cantidad,precio }, i) => {

                return (
                  <tr key={i}>
                    {/* <td>{i + 1}</td> */}
                    <td>{codigoVenta}</td>
                    <td>{producto}</td>
                    <td>{cantidad}</td>
                    <td>{precio}</td>
                    <td className='edit'><img onClick={() => swalPr(i)} src='./src/assets/edit.png'></img></td>
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
