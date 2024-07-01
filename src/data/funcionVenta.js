import { VentasData } from "./data";
import { deleteProduct } from "./funcionStock"
export const returnVenta=()=>{
    return VentasData
}
export const returnVentaTamaño=()=>{
    return VentasData.length
}
const obtenerFechaYHora = () => {
    const ahora = new Date();
    
    const dia = String(ahora.getDate()).padStart(2, '0');
    const mes = String(ahora.getMonth() + 1).padStart(2, '0'); // Los meses en JavaScript son 0-indexados
    const año = ahora.getFullYear();
    
    const horas = String(ahora.getHours()).padStart(2, '0');
    const minutos = String(ahora.getMinutes()).padStart(2, '0');
    
    const fechaYHora = `${año}-${mes}-${dia} ${horas}:${minutos}`;
    return fechaYHora;
  }


  export const findDateVenta=(fecha)=>{
    // console.log(fecha);
    // codigo=codigo.trim().toUpperCase()
    const ventas=VentasData.filter((data)=>data.fecha.startsWith(fecha))
    // const producto=dataStock.filter((data)=>data.codigo==codigo)
    // return producto
    return ventas
    }
export const ventaCarrito=(productos=[])=>{
    let codigoTemp=1
if (returnVentaTamaño()>0) {
    codigoTemp=returnVenta()[returnVentaTamaño()-1].codigoVenta+1
}
productos.forEach(({codigo,cantidad,precio})=>{

    const venta={
        codigoVenta:codigoTemp,
        fecha:obtenerFechaYHora(),
        producto:codigo,
        cantidad,
        precio
    }
    VentasData.push(venta)

    deleteProduct(codigo,cantidad)

})


}

export const eliminarVenta = (codigoVenta, producto) => {
    const index=VentasData.findIndex(item=>item.codigoVenta==codigoVenta&&item.producto==producto)
    if (index !== -1) {
        VentasData.splice(index, 1);
      }
      console.log(VentasData);
    // VentasData = VentasData.filter(venta => !(venta.codigoVenta === codigoVenta && venta.producto === producto));
  }
  