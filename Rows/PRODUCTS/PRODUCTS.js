class PRODUCTS{

	render(){
		let htmlCatalog = '';
		CATALOG.forEach(({id, name, price, img})=>{
			console.log(id, name, price, img);
			htmlCatalog +=`
				<div class="products-element ">
					<div class=element-border>
						<span class="products-element__name">${name}</span>
						<span class="products-element__price">${price}</span>
						<img class="products-element__img" src=${img}/>
						<button class="products-element__btn  id="open"">КУПИТЬ</button>
					</div>
				</div>

			`;
			// htmlnam +=`
			// 	<div class="products-element ">
			// 		<div class=element-border>
			// 			<span class="products-element__name">${name}</span>
			// 			<span class="products-element__price">${price}</span>
			// 		</div>
			// 	</div>

			// `;
		});

		const html = `
			<div class = "product-contain">
				${htmlCatalog}
			</div>

		`;
		ROOT_PRODUCTS.innerHTML = html;

	}
}
const productPage = new PRODUCTS();
productPage.render();