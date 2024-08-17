class PRODUCTSM{

	render(){
		let htmlCatalogm = '';
		CATALOGM.forEach(({id, name, price, img})=>{
			console.log(id, name, price, img);
			htmlCatalogm +=`
				<div class="products-element ">
					<div class=element-border>
						<span class="products-element__name">${name}</span>
						<span class="products-element__price">${price}</span>
						<img class="products-element__img" src=${img}/>
						<button class="products-element__btn">КУПИТЬ</button>
					</div>
				</div>

			`;
		});

		const htmlm = `
			<div class = "product-contain">
				${htmlCatalogm}
			</div>

		`;
		ROOT_PRODUCTSM.innerHTML = htmlm;

	}
}
const productPagem = new PRODUCTSM();
productPagem.render();