if (products.length > 0) {
    products.slice(4, 13).map((element, index) => {
        const RowList = document.getElementById("map_row_list")
        data1 = `
        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 px-4">
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
                            <span onclick="AddToCart(id)">Add to cart</span>
                        </div>
                        <div class="card_price">
                            <span><small>$</small>${element.price}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`
        RowList.innerHTML += data1;
    })
}

function filterProductPage(value) {
    let FilterButtons = document.querySelectorAll(".button-value1")
    FilterButtons.forEach((button) => {
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
        }
        else {
            button.classList.remove("active")
        }
    });
    let elementsList = document.querySelectorAll(".col-xl-4")
    elementsList.forEach((element) => {
        if (value == "various") {
            element.classList.remove("hide");
        }
        else {
            if (element.classList.contains(value.toUpperCase())) {
                element.classList.remove("hide")
            } else {
                element.classList.add("hide")
            }
        }
    })

}

