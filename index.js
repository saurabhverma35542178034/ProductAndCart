let cart = {
    name: [],
    price: [],
    quantity: []
  };
  
  
  function AddToCart(product, price) {
    
    const productIndex = cart.name.indexOf(product);
  
    if (productIndex === -1) {
      
      cart.name.push(product);
      cart.price.push(price);
      cart.quantity.push(1);
    } else {
      
      cart.quantity[productIndex]++;
     
    }
    
  
     FinalSum(product);
  }
  
 

function removefromcart(product){
    const productIndex = cart.name.indexOf(product);
    if(cart.name.indexOf(product)>=0)
    {
        if(cart.quantity[productIndex]>0)
        cart.quantity[productIndex]--;
    }
  
    FinalSum(product);
    
}  


function FinalSum(product)
{  let finalPrice=0;
     // Get the cart display element
     let cartdisplay = document.querySelector('.cart');
    
    
     

     // Clear the cart display
     cartdisplay.innerHTML = ''; // Optionally clear the existing display
    const productIndex = cart.name.indexOf(product);
     // Display updated cart items
     for (let i = 0; i < cart.name.length; i++) {



        // This is use to some  space
     let spacer1= document.createElement('span');
     spacer1.style.display='inline-block';
     spacer1.style.width='30px';
  
     let spacer2= document.createElement('span');
     spacer2.style.display='inline-block';
     spacer2.style.width='30px';

        
        let productSpan = document.createElement('span');
        let priceSpan = document.createElement('span');
        letsp2=document.createElement('span');
        let qtySpan = document.createElement('span');
    
      if(cart.quantity[i]>0){
        productSpan.textContent = cart.name[i];
        priceSpan.textContent = `.         
                          $${cart.price[i]*cart.quantity[i]}`;
        qtySpan.textContent = `
                           Qty: ${cart.quantity[i]}`;
                           
      }
      else {
        
        productSpan.style.display = 'none';
        priceSpan.style.display = 'none';
        qtySpan.style.display = 'none';
    }
  
     
    
     
        cartdisplay.appendChild(productSpan);
        cartdisplay.appendChild(spacer1);
        cartdisplay.appendChild(priceSpan);
        cartdisplay.appendChild(spacer2);
        cartdisplay.appendChild(qtySpan);
    
        
        cartdisplay.appendChild(document.createElement('br'));
        // cartdisplay.appendChild(document.createElement('br'));
      }
    

      
    let finalspan=document.createElement('span');  
    cartdisplay.appendChild(finalspan);
    for(let m=0;cart.name.length>m;m++)
    {
        finalPrice=finalPrice+cart.price[m]*cart.quantity[m];
        console.log(cart);
    }
    finalspan.textContent = `Final Price: $${finalPrice}`;
}



function plusEvent(product)
{   let output=0;
    let qtyElements = Array.from(document.querySelectorAll('.qtyn'));
    console.log(qtyElements);
    const productIndex = cart.name.indexOf(product);
    
         output = qtyElements[productIndex].textContent;
           output++;
           qtyElements[productIndex].textContent=output;

   
}

function minusEvent(product)
{   let output=0;
    let qtyElements = Array.from(document.querySelectorAll('.qtyn'));
    console.log(qtyElements);
    const productIndex = cart.name.indexOf(product);
    

    // Check if product exists in the cart
    
         output = qtyElements[productIndex].textContent;
         if(output>0)  
         output--;
           qtyElements[productIndex].textContent=output;

   
}
  
 
  