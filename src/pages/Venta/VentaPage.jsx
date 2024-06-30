import React from 'react'
import useForm from '../../hooks/useForm'
import './venta.css'
export default function VentaPage() {

  const { search, changeForm } = useForm({ search: '' })

  return (
    <div className='venta_page'>
      <h2>Mantenimiento de Venta</h2>
      <div className="venta_page__detalle">

        <div className="venta__formulario">
          <div className="formulario_venta_productos">
            <input type="text" name="search" placeholder="Buscar..." onChange={changeForm} />
            <div className="buttons">
              <button className='find' >Buscar</button>
            </div>
          </div>
          <div className="formulario_venta_table">
            <table>
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
                  <td>N°</td>
                  <td>Codigo</td>
                  <td>Descripcion</td>
                  <td>Cantidad</td>
                  <td>Opcion</td>
                </tr>
                <tr>
                  <td>N°</td>
                  <td>Codigo</td>
                  <td>Descripcion</td>
                  <td>Cantidad</td>
                  <td>Opcion</td>
                </tr>
                <tr>
                  <td>N°</td>
                  <td>Codigo</td>
                  <td>Descripcion</td>
                  <td>Cantidad</td>
                  <td>Opcion</td>
                </tr>
                <tr>
                  <td>N°</td>
                  <td>Codigo</td>
                  <td>Descripcion</td>
                  <td>Cantidad</td>
                  <td>Opcion</td>
                </tr>
                <tr>
                  <td>N°</td>
                  <td>Codigo</td>
                  <td>Descripcion</td>
                  <td>Cantidad</td>
                  <td>Opcion</td>
                </tr>
                <tr>
                  <td>N°</td>
                  <td>Codigo</td>
                  <td>Descripcion</td>
                  <td>Cantidad</td>
                  <td>Opcion</td>
                </tr>
                <tr>
                  <td>N°</td>
                  <td>Codigo</td>
                  <td>Descripcion</td>
                  <td>Cantidad</td>
                  <td>Opcion</td>
                </tr>

              </tbody>


            </table>
          </div>


        </div>
        <div className="venta__carrito">
        <div className="venta__carrito_resultado">
          <p>resulto</p>
        </div>
        <div className="venta__carrito_table">

          <table>
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
                <td>N°</td>
                <td>Codigo</td>
                <td>Descripcion</td>
                <td>Cantidad</td>
                <td>Opcion</td>
              </tr>

            </tbody>


          </table>
        </div>

       

        </div>


      </div>


    </div>
  )
}
