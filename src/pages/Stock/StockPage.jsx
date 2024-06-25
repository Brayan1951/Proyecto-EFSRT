import React, { useEffect, useState } from 'react'
import useForm from '../../hooks/useForm'
import { findById, returnStock } from '../../data/funcionStock'

import { editCompontes } from '../components/Componente'


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




  const swalPr = (id) => {

    editCompontes(id, stockData[id]).then(() => {
      const stock = returnStock()
      setStockData([...stock])
    })

  }






  return (
    <div className='stock_page'>
      <h2>Mantenimiento de Stock</h2>

      <hr />
      <div className="formulario_stock">
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
                    <td>{i + 1}</td>
                    <td>{codigo}</td>
                    <td>{descripcion}</td>
                    <td>{cantidad}</td>
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
