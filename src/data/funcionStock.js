import { dataStock } from "./data";


export const returnStock=()=>{
    return dataStock
}





export const  findById=(id='')=>{



const stock=dataStock.filter((data)=>data.codigo.startsWith(id.toUpperCase()))
return stock

}
