class Product{
    constructor(name, price, brand){
        this.name = name;
        this.price = price;
        this.brand = brand;

    }
   
}


class Ui{
    addProduct(product){
      const productList =  document.getElementById('product-list');
      const element = document.createElement('div');
      element.innerHTML = ` 
     
      <div class="card-body  text-center mb-4">
          <strong> Name </strong>:   ${product.name}  &nbsp;
          <strong>Price </strong>: $ ${product.price} &nbsp;
          <strong>brand </strong>:  ${product.brand}  &nbsp;
          <a href="#" class=" btn btn-danger "  name="delete" >Delete</a>

      
  </div>
 
      `;
 productList.appendChild(element);

    }
    resetForm(){
        document.getElementById('product-form').reset();

    }


    addDelete(element){
        if(element.name === 'delete'){
            console.log(element.parentElement.parentElement.remove());
            this.showMessage('Product Deleted Successfully', 'info')
        }


    }
    showMessage(message, cssClass){
       const div = document.createElement('div');
       div.className = `alert alert-${cssClass} mt-2`;
       div.appendChild(document.createTextNode(message));
       // show
      const container = document.querySelector('.container');
       const app = document.querySelector('#app');
       container.insertBefore(div, app);
       setTimeout(function(){
        document.querySelector('.alert').remove();
       }, 2000)

    }
}

// Dom Events
 document.getElementById('product-form')
  .addEventListener('submit', function(e){
   const name = document.getElementById('name').value;
   const price = document.getElementById('price').value;
   const brand = document.getElementById('brand').value;

   const product = new Product(name, price , brand);

   const ui = new Ui();
   if(name=== '' || price === '' || brand=== ''){ 
      return ui.showMessage('Complete Fields ', 'danger');
   };
   ui.addProduct(product);
   ui.resetForm();
   ui.showMessage(' Product Added Succesfully', 'success')


   e.preventDefault()
     
 } );

document.getElementById('product-list').addEventListener('click', function(e){
 const ui = new Ui();
 ui.addDelete(e.target);
 } )

 
// guardar en un local storage