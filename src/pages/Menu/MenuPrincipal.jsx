import React from 'react'
import { Link } from 'react-router-dom'
// import './menu.css'

export default function MenuPrincipal() {
  return (
    <div className="menu_link">
      <h1>Bienvenidos a Minga de Rosa Store</h1>

      <button className='btn btn-link-menu' >

        <Link to={'stock'}>


          Revisar Stock de Productos

        </Link>
      </button>

      <button className='btn btn-link-menu'>

        <Link to={'venta/report'}>
          Revisar Ventas Totales

        </Link>
      </button>


    </div>


  )
}
