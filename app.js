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
      <div class="card text-center mb-4 ">
      <div class="card-body">
          <strong>Product Name </strong>:   ${product.name}
          <strong>Product Price </strong>:  ${product.price}
          <strong>Product brand </strong>:  ${product.brand}

      </div>
  </div>
 
      `;
 productList.appendChild(element);

    }
    resetForm(){
        document.getElementById('product-form').reset();

    }


    addDelete(){

    }
    addMessage(){

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
   ui.addProduct(product);
   ui.resetForm();


   e.preventDefault()

 
     
 } )

 
