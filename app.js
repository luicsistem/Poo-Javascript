class Product{
    constructor(name, price, brand){
        this.name = name;
        this.price = price;
        this.brand = brand;

    }
   
}


class Ui{
    addProduct(){

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
   e.preventDefault()


     
 } )

 
