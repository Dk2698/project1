import displayProducts from "./utils/displayProduct.js";
import products from "../js/utils/products.js";


// search product
const searchBar = document.getElementById('searchBar'); 
searchBar.addEventListener("keyup", (e) => {
    const searchString = e.target.value.toLowerCase();
  
    const filteredProducts = products.filter((product) => {
        return (
              product.name.toLowerCase().includes(searchString) ||
              product.brand.toLowerCase().includes(searchString)
          );
    });
    console.log(searchString)
    if(filteredProducts.length === 0){
      demoVisibility()
    } 
    else{
      displayProducts(filteredProducts);

    }  
});


// call function
displayProducts(products);

function demoVisibility() {
  document.getElementsByClassName("items-main-container")[0].innerHTML = "Oops! No Results Found.."
}







