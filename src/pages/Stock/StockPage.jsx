import React from 'react'
import './stock.css'
export default function StockPage() {
  return (
    <div className='stock_page'>
      <h2>Mantenimiento de Stock</h2>

      <hr />
      <div className="formulario">
        <input type="text" name="search" placeholder="Buscar..." />
        <div className="buttons">
          <button className='find'>Buscar</button>
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

            <tr>
              <td>1</td>
              <td>EM_01</td>
              <td>Hotdog 6 unidades</td>
              <td>15</td>
              <td>edit</td>
            </tr>
            <tr>
              <td>2</td>
              <td>EM_02</td>
              <td>Hotdog 12 unidades</td>
              <td>15</td>
              <td>edit</td>
            </tr>
          </tbody>


        </table>





      </div>


    </div>
  )
}
