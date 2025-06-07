let productCount = 0;

class AddToCart{
    addToCart(e){
        // let productCount = 0;
        this.productCounterEl = document.getElementById('product-counter');
        console.log(this.productCounterEl)
        console.log(productCount);
         if(e.target.tagName === 'IMG' || e.target.tagName === 'H3'){
        const target = e.target.closest('.img-wrapper').querySelector('h3');
        console.log(target)
            if(target.classList.contains('clicked')){
                target.classList.remove('clicked');
                target.innerText = 'Add To Cart';
                const price = +e.target.closest('#elementWrapper').querySelector('strong').textContent;
                productCount -= price;
            }else{
                target.classList.add('clicked');
                target.innerText = 'Remove From Cart';
                const price = +e.target.closest('#elementWrapper').querySelector('strong').textContent;
                productCount += price;
                
            }
            this.productCounterEl.innerText = `£${+(productCount).toFixed(2)}`;
         };
    };
};

const addToCart = new AddToCart;
export default addToCart;

// export function addToCart(e){
//   console.log(e.target)
//   const productCounterEl = document.getElementById('product-counter');

//     if(e.target.tagName === 'IMG' || e.target.tagName === 'H3'){
//         const target = e.target.closest('.img-wrapper').querySelector('h3');
//         console.log(target)
//         if(target.classList.contains('clicked')){
//             target.classList.remove('clicked');
//             target.innerText = 'Add To Cart';
//             const price = +e.target.closest('#elementWrapper').querySelector('strong').textContent;
//             productCount -= price;
//         }else{
//             target.classList.add('clicked');
//             target.innerText = 'Remove From Cart';
//             const price = +e.target.closest('#elementWrapper').querySelector('strong').textContent;
//             productCount += price;
            
//         }
//          productCounterEl.innerText = `£${+(productCount).toFixed(2)}`;
//     }
// }