if (products.length > 0) {
    products.slice(0, 4).map((element, index) => {
        const RowStandard = document.getElementById("map_row_standard")
        dataStandard = `
        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 px-4">
        <div class="filter_card">
            <div class="card_image">
                <img src="${element.images}"
                    alt="">
                    <span class="sale_banner">${element.sale}</span>
                    <span class="sold_banner">${element.sold}</span>
                    <span class="new_banner">${element.new}</span>
            </div>
            <div class="card_items">
                <h6>${element.name}</h6>
                <div class="card_action">
                    <div class="card_btm_changing">
                        <div class="card_cart">
                            <span>Add to cart</span>
                        </div>
                        <div class="card_price">
                            <span><small>$</small>${element.price}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    if (RowStandard) {
        RowStandard.innerHTML += dataStandard;
    }
    })
}