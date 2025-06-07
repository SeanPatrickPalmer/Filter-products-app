import '@fortawesome/fontawesome-free/css/all.css'

import products from "./state.js";
import populate from "./PopulateUI.js";
import scroll from "./scroll.js";
import addToCart from "./AddToCart.js";
//
const searchInput = document.getElementById('search-input');
const asideContainer = document.querySelector('.aside-container');
let checkedType = [];
//
//////////////////////////////////////////////////////////////
//////////////Search for products by search term/////////////
function selectChecked(e){
  const targ = e.target;
  searchInput.value = '';
  if(targ.checked){
    checkedType = [...checkedType, ...products.filter((prod) => prod.type===targ.id)];
  }else{
    checkedType = checkedType.filter(prod => prod.type !=targ.id)
  }
  checkedType.length === 0 ? populate.addImages(products) : populate.addImages(checkedType);
};
//////Search for products by checkbox///// 
function searchProducts(e){
    const searchTerm = searchInput.value.trim().toLowerCase();
    let foundProductArr = [];
    if(checkedType.length !==0){
          foundProductArr = checkedType.filter((prod) => prod.name.toLowerCase().includes(searchTerm));
          foundProductArr.length === 0 ? main.innerHTML = `<h1 id='main-h1'>Sorry!<br>  There are no matching products in this category.</h1>` : populate.addImages(foundProductArr);      
    }else{
          foundProductArr = products.filter((prod) => prod.name.toLowerCase().includes(searchTerm));
          foundProductArr.length === 0 ? populate.addImages(products) : populate.addImages(foundProductArr)
    } 
};
////Initialise event listeners and instance methods////
(function(){
    asideContainer.addEventListener('change', selectChecked);
    main.addEventListener('click', addToCart.addToCart);
    searchInput.addEventListener('input', searchProducts);
    populate.addImages(products);
    scroll.scroll();
})();
//// 
console.log('hellow')


