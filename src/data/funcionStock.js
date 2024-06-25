import { dataStock } from "./data";


export const returnStock=()=>{
    return dataStock
}





export const  findById=(id='')=>{



const stock=dataStock.filter((data)=>data.codigo.startsWith(id.toUpperCase()))
return stock

}



export const updateStocById=(codigo,formValues)=>{

    const index=dataStock.findIndex(item=>item.codigo==codigo)
    dataStock[index]={ ...dataStock[index],...formValues}


}
