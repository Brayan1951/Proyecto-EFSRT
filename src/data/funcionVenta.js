import { VentasData } from "./data";
import { deleteProduct } from "./funcionStock"
export const returnVenta=()=>{
    return VentasData
}
const obtenerFechaYHora = () => {
    const ahora = new Date();
    
    const dia = String(ahora.getDate()).padStart(2, '0');
    const mes = String(ahora.getMonth() + 1).padStart(2, '0'); // Los meses en JavaScript son 0-indexados
    const año = ahora.getFullYear();
    
    const horas = String(ahora.getHours()).padStart(2, '0');
    const minutos = String(ahora.getMinutes()).padStart(2, '0');
    
    const fechaYHora = `${dia}-${mes}-${año} ${horas}:${minutos}`;
    return fechaYHora;
  }



export const ventaCarrito=(productos=[])=>{

    obtenerFechaYHora()

productos.map(({codigo,cantidad})=>{

    deleteProduct(codigo,cantidad)

})



}