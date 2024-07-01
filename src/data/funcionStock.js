import { dataStock } from "./data";


export const returnStock=()=>{
    return dataStock
}


export const finOneById=(codigo='')=>{
codigo=codigo.trim().toUpperCase()
const producto=dataStock.filter((data)=>data.codigo==codigo)
return producto
}


export const  findById=(id='')=>{



const stock=dataStock.filter((data)=>data.codigo.startsWith(id.toUpperCase()))
return stock

}


export const addProduct=(producto)=>{
    producto.codigo=producto.codigo.toUpperCase()
    dataStock.push(producto)
}
export const deleteProduct=(codigo,cantidad)=>{
    const index=dataStock.findIndex(item=>item.codigo==codigo)
    if (dataStock[index].cantidad>=cantidad) {
        
        dataStock[index].cantidad=dataStock[index].cantidad-cantidad;
    }
}

export const updateStocById=(codigo,formValues)=>{

    const index=dataStock.findIndex(item=>item.codigo==codigo)
    dataStock[index]={ ...dataStock[index],...formValues}


}
