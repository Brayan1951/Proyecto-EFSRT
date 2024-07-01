import React, { useState } from 'react'
import useForm from '../../hooks/useForm'
import { findById } from '../../data/funcionStock'
import { ventaCarrito } from '../../data/funcionVenta'
import Swal from 'sweetalert2'

import './venta.css'

export default function VentaPage() {

  const { search, changeForm } = useForm({ search: '' })

  const [stock, setStock] = useState([])

  const [carrito, setCarrito] = useState([])

  const Find = () => {

    const stock = findById(search)
    setStock(stock)

  }


  const agregarProducto = (i) => {
    const producto = stock[i];

    // Buscar si el producto ya está en el carrito
    const index = carrito.findIndex(item => item.codigo === producto.codigo);

    if (index === -1) {
      // Si el producto no está en el carrito, agregarlo con cantidad 1
      if (producto.cantidad > 0) {
        const addProducto = {
          codigo: producto.codigo,
          descripcion: producto.descripcion,
          precio: producto.precio,
          cantidad: 1,
        };
        setCarrito(prev => [...prev, addProducto]);
      } else {
        Swal.fire({
          icon: "error",
          title: "No hay suficiente stock para agregar este producto.",
          text: "Deberias pedir mas este producto!",
          // footer: '<a href="#">Why do I have this issue?</a>'
        });
        // console.log("No hay suficiente stock para agregar el producto.");
      }
    } else {
      // Si el producto ya está en el carrito, actualizar la cantidad


      const updatedCarrito = carrito.map((item, idx) => {
        if (idx === index) {
          const cantTemp = item.cantidad + 1
          if (cantTemp > producto.cantidad) {
            return {
              ...item,
              cantidad: item.cantidad,
            };
          }
          return {
            ...item,
            cantidad: item.cantidad + 1,
          };
        }
        return item;
      });
      setCarrito(updatedCarrito);
    }
  }



  const eliminarProducto = (i) => {
    const producto = carrito[i];

    // Buscar si el producto ya está en el carrito
    const index = carrito.findIndex(item => item.codigo === producto.codigo);
    if (index !== -1) {
      // Si el producto está en el carrito, disminuir la cantidad
      const updatedCarrito = carrito.map((item, idx) => {
        if (item.codigo === producto.codigo) {
          const nuevaCantidad = item.cantidad - 1;
          if (nuevaCantidad > 0) {
            return {
              ...item,
              cantidad: nuevaCantidad,
            };
          } else {
            return null; // Eliminar el producto si la cantidad es 0
          }
        }
        return item;
      }).filter(item => item !== null); // Filtrar los productos eliminados
      setCarrito(updatedCarrito);
    } else {
      console.log("El producto no está en el carrito.");
    }
  }


  const resultadoCantidad=()=>{
    let cantidadTotal=0;
    carrito.map(({cantidad})=>{
      cantidadTotal=cantidadTotal+cantidad
    })

    return cantidadTotal
  }
  const resultadoPrecio=()=>{
    let total=0;
    carrito.map(({cantidad,precio})=>{
      total=total+(cantidad*precio)
    })

    return total
  }

  const venderCarrito=()=>{

    ventaCarrito(carrito)

    setCarrito([])
  }



  return (
    <div className='venta_page'>
      <h2>Mantenimiento de Venta</h2>
      <div className="venta_page__detalle">

        <div className="venta__formulario">
          <div className="formulario_venta_productos">
            <input type="text" name="search" placeholder="Buscar..." onChange={changeForm} />
            <div className="buttons">
              <button className='find' onClick={Find} >Buscar</button>
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

                {

                  stock.map(({ codigo, descripcion, cantidad }, i) => {

                    return (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{codigo}</td>
                        <td>{descripcion}</td>
                        <td>{cantidad}</td>
                        <td className='add'   onClick={() => { agregarProducto(i) }}>agregar</td>
                      </tr>

                    )

                  })
                }




              </tbody>


            </table>
          </div>


        </div>
        <div className="venta__carrito">
          <div className="venta__carrito_resultado">
            <div className="resultado_cantidad">
              <h3>Cantidad de productos: {resultadoCantidad()}</h3>
            </div>
            <div className="resultado_total">
              <h3>Total: S/ {resultadoPrecio()}</h3>
            </div>
            <div className="resutado_button">
              <button disabled={resultadoCantidad()<=0} onClick={venderCarrito}>Vender</button>
            </div>
          </div>
          <div className="venta__carrito_table">

            <table>
              <thead>
                <tr>
                  <th>N°</th>
                  <th>Codigo</th>
                  <th>Descripcion</th>
                  <th>Cantidad</th>
                  <th>Precio</th>
                  <th>Opcion</th>
                </tr>
              </thead>
              <tbody>
                {

                  carrito.map(({ codigo, descripcion, cantidad,precio }, i) => {

                    return (
                      <tr key={codigo}>
                        <td>{i + 1}</td>
                        <td>{codigo}</td>
                        <td>{descripcion}</td>
                        <td>{cantidad}</td>
                        <td>{precio}</td>
                        <td className='add' onClick={() => { eliminarProducto(i) }}>eliminar</td>
                      </tr>

                    )

                  })
                }

              </tbody>



            </table>
          </div>



        </div>


      </div>


    </div>
  )
}
