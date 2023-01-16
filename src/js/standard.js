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
        if (RowStandard) {
            RowStandard.innerHTML += dataStandard;
        }
    })
}

// function increaseValue() {
//     var value = parseInt(document.querySelector('.count_number').innerHTML, 0);
//     value = isNaN(value) ? 0 : value;
//     value++;
//     document.querySelector('.count_number').innerHTML = value;
//   }

//   function decreaseValue() {
//     var value = parseInt(document.querySelector('.count_number').innerHTML, 0);
//     value = isNaN(value) ? 0 : value;
//     value < 1 ? value = 1 : '';
//     value--;
//     document.querySelector('.count_number').innerHTML = value;
//   }

const decrementCount = document.querySelector(".decrease");
const incrementCount = document.querySelector(".increase");

const totalCount = document.querySelector(".count_number");
var count = 0;
totalCount.innerHTML = count;

const Decrement = () => {
    if (totalCount.innerHTML > 0) {
        count--;
        totalCount.innerHTML = count;
    }
};
const Increment = () => {
    count++;
    totalCount.innerHTML = count;
};
incrementCount.addEventListener("click", Increment);
decrementCount.addEventListener("click", Decrement);

const bigButton1 = document.getElementById("description")
const bigButton2 = document.getElementById("additional_info")
const bigButton3 = document.getElementById("reviews")
const Dnone1 = document.querySelector(".first_d_none")
const Dnone2 = document.querySelector(".second_d_none")
const Dnone3 = document.querySelector(".third_d_none")
if (bigButton1) {
    bigButton1.addEventListener("click", () => {
        Dnone1.style.display = "block"
        Dnone2.style.display = "none"
        Dnone3.style.display = "none"
        bigButton1.classList.add("selected")
        bigButton2.classList.remove("selected")
        bigButton3.classList.remove("selected")
    })

}
if (bigButton2) {
    bigButton2.addEventListener("click", () => {
        Dnone1.style.display = "none"
        Dnone2.style.display = "flex"
        Dnone3.style.display = "none"
        bigButton2.classList.add("selected")
        bigButton3.classList.remove("selected")
        bigButton1.classList.remove("selected")
    })
}
if (bigButton3) {
    bigButton3.addEventListener("click", () => {
        Dnone1.style.display = "none"
        Dnone2.style.display = "none"
        Dnone3.style.display = "block"
        bigButton3.classList.add("selected")
        bigButton2.classList.remove("selected")
        bigButton1.classList.remove("selected")
    })
}

window.onload = () => {
    Dnone1.style.display = "block"
    bigButton1.classList.add("selected")
};