const filters = document.querySelector('#filters');

filters.addEventListener('input', filterGoods);

function filterGoods() {
  const
    types = [...filters.querySelectorAll('#typen input:checked')].map(n => n.value),
    styles = [...filters.querySelectorAll('#stylen input:checked')].map(n => n.value),
    maths = [...filters.querySelectorAll('#mathn input:checked')].map(n => n.value),
    pokryths = [...filters.querySelectorAll('#pokrythn input:checked')].map(n => n.value),
    typeConstrs = [...filters.querySelectorAll('#typeConstrn input:checked')].map(n => n.value),
    oblychs = [...filters.querySelectorAll('#oblychn input:checked')].map(n => n.value),
    priceMin = document.querySelector('#price-min').value,
    priceMax = document.querySelector('#price-max').value;



  outputGoods(CATALOG.filter(n => (
    (!types.length || types.includes(n.type)) &&
    (!styles.length || styles.includes(n.style)) &&
    (!maths.length || maths.includes(n.math)) &&
    (!pokryths.length || pokryths.includes(n.pokryth)) &&
    (!typeConstrs.length || typeConstrs.includes(n.typeConstr)) &&
    (!oblychs.length || oblychs.includes(n.oblych)) &&

    (!priceMin || priceMin <= n.price) &&
    (!priceMax || priceMax >= n.price)
  )));
}

 function outputGoods(products) {
   document.getElementById('products').innerHTML = products.map(n => `
    <div class = "product-contain">
      <div class="products-element ">
       <div class=element-border>
        <span class="products-element__name">${n.name}</span>
        <span class="products-element__price">${n.price}</span>
        <img class="products-element__img" src=${n.img}/>
        <button class="products-element__btn">КУПИТЬ</button>
       </div>
      </div>
    </div>

   `).join('');
 }

outputGoods(CATALOG);







