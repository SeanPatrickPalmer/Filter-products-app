class PopulateUI{
  constructor(main){
    this._mainElement = main;
  }
  addImages(products){
    this._mainElement.innerHTML= '';
    console.log(this._mainElement)
    products.forEach((product)=>{
      const div = document.createElement('div');
      div.innerHTML = this.createProductEls(product);     
      this._mainElement.appendChild(div);
    })
  }
  createProductEls(product){
    return `<div id='elementWrapper'>
              <div class="img-wrapper" data-type=${product.type} data-name=${product.name}>
                    <img src="${product.url}" alt="${product.type}">
                    <h3>Add To Cart</h3>
                </div>
                <div class="info-wrapper">
                    <h3>${product.name}</h3>
                    <p><strong>${product.price}</strong></p>
                </div>              
            </div>
          `;
      }
  }

  const populate = new PopulateUI(main);
  export default populate;