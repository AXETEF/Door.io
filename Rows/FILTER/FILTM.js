const filt = document.querySelector('#filtersM');

filt.addEventListener('input', filtGoods);

function filtGoods() {
  const
    types = [...filt.querySelectorAll('#typem input:checked')].map(n => n.value),
    styles = [...filt.querySelectorAll('#stylem input:checked')].map(n => n.value),
    priceMin = document.querySelector('#price-minn').value,
    priceMax = document.querySelector('#price-maxn').value;



  outGoods(CATALOGM.filter(n => (
    (!types.length || types.includes(n.type)) &&
    (!styles.length || styles.includes(n.style)) &&
    (!priceMin || priceMin <= n.price) &&
    (!priceMax || priceMax >= n.price)
  )));
}

 function outGoods(productsM) {
   document.getElementById('productsM').innerHTML = productsM.map(n => `
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

outGoods(CATALOGM);