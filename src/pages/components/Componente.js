import Swal from "sweetalert2";
import useForm from "../../hooks/useForm";
import { updateStocById } from "../../data/funcionStock";

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
