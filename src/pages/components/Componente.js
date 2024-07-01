import Swal from "sweetalert2";
import useForm from "../../hooks/useForm";
import { addProduct, finOneById, updateStocById } from "../../data/funcionStock";
import { eliminarVenta } from "../../data/funcionVenta";

export const editCompontes = async (id,producto) => {
  const { codigo, descripcion, precio, cantidad } = producto;
  // const{codigo,descripcion,changeform}=useForm(producto)


  const { value: formValues } = await Swal.fire({
    title: `Producto ${codigo}`,
    html: `    
    <div class='formulario'>

      <div class="formulario_item form_desc">
        <label class="">Descripcion</label>
        <label class="item">${descripcion}</label>
     
      </div>
      <div class="formulario_item form_stock">
        <label class="">Stock</label>
        <input type="number" min=0 id='stock' class="item" value=${cantidad} />
      </div>
      <div class="formulario_item form_precio">
        <label class="">Precio</label>
        <input type="number" min=0 id='precio'  class="item" value=${precio}  />
      </div>

    </div>
    
    `,
    preConfirm:()=>{
      return{
        // descripcion:document.getElementById("descripcion").value,
        cantidad:parseInt( document.getElementById("stock").value),
        precio:parseInt(document.getElementById("precio").value)
    }
    },
    confirmButtonColor: "#3085d6",
    confirmButtonText: "actualizar",
    showCancelButton:true,
    cancelButtonColor: "#d33",
  });


  if (formValues) {
    if (formValues.cantidad <0 || formValues.precio<0) {
      formValues.cantidad=0
    }
    if ( formValues.precio<0) {
      formValues.precio=0
    }

    updateStocById(codigo,formValues)
    // console.log(formValues);


  }
};



export const addProducto=async ()=>{

  return Swal.fire({
    title:"Agregar un nuevo producto",
    text:"Agregue el codigo y nuevo producto",
    html: `    
    <div class='formulario'>

  
      <div class="formulario_item form_stock">
        <label class="">Codigo</label>
        <input type="text" id='codigo' class="item"  />
      </div>
      <div class="formulario_item form_precio">
        <label class="">descripcion</label>
        <input type="text"  id='descripcion'  class="item"  />
      </div>
         <div class="formulario_item form_stock">
        <label class="">Stock</label>
        <input type="number" min=0 id='stock' class="item" value=${0} />
      </div>
      <div class="formulario_item form_precio">
        <label class="">Precio</label>
        <input type="number" min=0 id='precio'  class="item"  value=${0} />
      </div>

    </div>
    
    `,

    preConfirm:()=>{

      
      
      const newProducto= {
        codigo:document.getElementById("codigo").value,
        descripcion:document.getElementById("descripcion").value,
        cantidad:parseInt( document.getElementById("stock").value),
        precio:parseFloat(document.getElementById("precio").value)
      };

      const confirm=finOneById(newProducto.codigo)

      if (confirm.length==1) {
        Swal.showValidationMessage(`          El producto con codigo: ${newProducto.codigo.toUpperCase()} ya existe`);
      }else if(!newProducto.descripcion){
        Swal.showValidationMessage(`          El producto debe contener almenos codigo y descripcion`);
      }else{
         addProduct(newProducto)
         
      }
      


    
    },


    showLoaderOnConfirm: true,
    confirmButtonColor: "#3085d6",
    confirmButtonText: "Agregar",
    cancelButtonText:"Cancelar",
    showCancelButton:true,
    cancelButtonColor: "#d33",

  })

}


export const deleteVentaSwal=async (codigoVenta, producto  )=>{
  return await Swal.fire({
    title: "Estas seguro que quieres elimniar?",
    text: "No prodras recuperar esta venta!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {

       eliminarVenta(codigoVenta, producto)
      Swal.fire({
        title: "Eliminado!",
        text: "La venta ha sido eliminada exitosamente.",
        icon: "success"
      });
    }
  });
}