import React, { useEffect, useState } from 'react'
import useForm from '../../hooks/useForm'
import { findById, returnStock } from '../../data/funcionStock'
import './stock.css'



export default function StockPage() {

  const [stockData, setStockData] = useState([])

  const { search, changeForm } = useForm({ search: '' })

  const Find = () => {
    console.log(stockData);

    const stock = findById(search)
    setStockData(stock)
  }



  useEffect(() => {
    const stock = returnStock()
    setStockData(stock)
  }, [])









  return (
    <div className='stock_page'>
      <h2>Mantenimiento de Stock</h2>

      <hr />
      <div className="formulario">
        <input type="text" name="search" placeholder="Buscar..." onChange={changeForm} />
        <div className="buttons">
          <button className='find' onClick={Find}>Buscar</button>
          <button className='add'>Agregar</button>

        </div>
      </div>


      <div className="detalle">
        <table id='detalle-stock'>
          <thead>

            <tr>
              <th>N°</th>
              <th>Codigo</th>
              <th>Descripcion</th>
              <th>Cantidad</th>
              <th>Opcion</th>
            </tr>
          </thead>
          <tbody>

            {
              stockData.map(({ codigo, descripcion, cantidad }, i) => {

                return (
                  <tr key={i}>
                    <td>{i}</td>
                    <td>{codigo}</td>
                    <td>{descripcion}</td>
                    <td>{cantidad}</td>
                    <td>edit</td>
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
