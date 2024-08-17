class STATX{

	render(){
		let htmlCatalog = '';
		STAT.forEach(({name, text, img, date})=>{
			console.log(name, text, img, date);
			htmlCatalog +=`
				<div class="products-element ">
					<div class=element-border>
						<img class="products-element__img" src=${img}/>
						<div class="bukvy">
							<div class="vnutri">
							<div class="products-element__name">${name}</div>
							<div class="products-element__text">${text} </div>
							</div>
							<div class="bott">
								<button class="butta">Читать далее</button>
								<div class="products-element__date">${date} </div>
							</div>
						</div>
					</div>
				</div>

			`;
		});

		const html = `
			<div class ="product-contain">
				${htmlCatalog}
			</div>

		`;
		ROOT_STAT.innerHTML = html;

	}
}
const productPage = new STATX();
productPage.render();