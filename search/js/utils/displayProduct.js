
const  productList = document.getElementById('productList');
let displayProducts = (products) => {
    console.log(products)
    var productHTMLString = ""+
      products.map((product) =>{
        return "<div class='item-main-container'>"+
        "<div class='item-offer'>" +
                  "<h4 class='text'>"+ "10% OFFER" +"</h4>"+
                     "<i class='fas fa-circle'>" +"</i>" +
                "</div> "+

                "<div class='image-head'>" +
                    "<div class='image'>" +
                    "<img src=" + product.image + ">" + "</img>" +
                      "<div class='veg-icon'>" +
                        "<i class='fas fa-circle'></i>" +
                      "</div>"+
                    "</div>"+
                  "</div>"+

              "<div class='text-head'>" +
                "<h4> " + product.name +"</h4>" +
               "</div>" +

               "<div class='text-description'>" +
                "<h2 class='text-description-price'>"+"RS "+ product.price+"</h2> "+

               "<div class='delivery-description'>"+
                    "<div class='delivery-icon'>"+
                    "<i class='fas fa-motorcycle'>"+"</i>"+
                    "</div>"+
                    "<div class='delivery-date'>"+
                    "<p>"+"Express Delivey: Today 5:30 PM - 7:30 PM"+"</p> "+
                    "</div>"+
                "</div>"+

                "<div class='book-order'>"+
                  "<div class='quantity-box'>"+
                  "<div class='quantity'>"+"Qty"+"</div>"+
                  "<div class='quantity-text'>"+ product.countInStock+"</div>"+
                  "</div>"+

                    "<div class='add-box'>"+
                    "<div class='add-text'>"+"ADD"+"</div>"+
                    "<div class='add-icon'>"+"<i class='fas fa-shopping-cart'>"+"</i>"+"</div>"+
                    "</div> "+
                "</div>" +
                "</div>" +
              
              "</div>"+

          "</div>" ;
      }).join('');

    productList.innerHTML = productHTMLString;
}

export default displayProducts;
