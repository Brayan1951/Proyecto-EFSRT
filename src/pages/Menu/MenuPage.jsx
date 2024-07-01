import React from 'react'
import {  NavLink, Outlet } from 'react-router-dom'

import './menu.css'



export default function MenuPage() {
  return (
    <div className="menu_page">

      <nav>
        <ul>
          <li>
            <NavLink to={''} className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "select" : ""
            }>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to={'stock'} className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "select" : ""
            }>
              Stock
            </NavLink>
          </li>
          <li>
            <NavLink to={"venta/report"} className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "select" : ""
            }>
              Ventas
            </NavLink>
          </li>
        </ul>
      </nav>
      <main>

        <Outlet></Outlet>
      </main>

    </div>

  )
}
