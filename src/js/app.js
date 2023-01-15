const openBtn = document.querySelector(".open-menu")
const openItems = document.querySelector("#menu-body")


if (openBtn) {
    openBtn.addEventListener("click", () => {
        if (openItems.style.transform == "translateX(0px)") {
            openItems.style.transform = "translateX(-100%)"
            openItems.style.opacity = "1"
        }
        else {
            openItems.style.transform = "translateX(0px)"
            openItems.style.opacity = "0"
        }
    })
}

const closeBtn = document.querySelector(".close_button")

if (closeBtn) {
    closeBtn.addEventListener("click", () => {
        openItems.style.transform = "translateX(0px)"
        openItems.style.opacity = "0"
    })

}

const navSearch = document.querySelector(".nav_search")
const SearchPopUP = document.querySelector(".search_popup")

if (navSearch) {
    navSearch.addEventListener("click", () => {
        if (SearchPopUP.style.height == "0px") {
            SearchPopUP.style.height = "100%"
        }
        else {
            SearchPopUP.style.height = "0px"
        }
    })
}

const acc1 = document.querySelector('#acc1')
if (acc1) {
    acc1.addEventListener('click', () => {
        document.querySelector('#hidden1').classList.toggle('active')
    })
}
const acc2 = document.querySelector('#acc2')
if (acc2) {
    acc2.addEventListener('click', () => {
        document.querySelector('#hidden2').classList.toggle('active')
    })
}


const acc3 = document.querySelector('#acc3')
if (acc3) {
    acc3.addEventListener('click', () => {
        document.querySelector('#hidden3').classList.toggle('active')
    })
}
const acc4 = document.querySelector('#acc4')
if (acc4) {
    acc4.addEventListener('click', () => {
        document.querySelector('#hidden4').classList.toggle('active')
    })
}
const acc5 = document.querySelector('#acc5')
if (acc5) {
    acc5.addEventListener('click', () => {
        document.querySelector('#hidden5').classList.toggle('active')
    })
}
const acc6 = document.querySelector('#acc6')
if (acc6) {
    acc6.addEventListener('click', () => {
        document.querySelector('#hidden6').classList.toggle('active')
    })
}

var swiper = new Swiper(".card_slide", {
    spaceBetween: 30,
    effect: "fade",
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// var indexValue = 0;
// function slideShow() {
//     setTimeout(slideShow, 2000)
//     var x;
//     const img =document.querySelectorAll(".autoswipe")
//     for (x = 0; x < img.length; x++) {
//         img[x].style.display = "none";

//     }
//     indexValue++
//     if (indexValue > img.length) {
//         indexValue = 1
//     }
//     img[indexValue -1].style.display="block"
// }

// slideShow();

const Categories = document.querySelector('#click_category')
if (Categories) {
    Categories.addEventListener('click', () => {
        document.querySelector('.popup_categories').classList.toggle('height100')
    })
}

const products = [
    {
        id: 0,
        name: "MAJESTY PALM",
        section: "CACTUSES",
        price: "259",
        images:
            "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-14-img.jpg",
        new: "",
        sold: "",
        sale: "",
    },
    {
        id: 1,
        name: "FOXGLOVE FLOWER",
        section: "POPULAR",
        price: "259",
        images:
            "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-13-img.jpg",
        new: "",
        sold: "",
        sale: "",
    },
    {
        id: 3,
        name: "SWEET ALYSSUM",
        section: "WINTER",
        price: "259",
        images:
            "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/shop-10-img.jpg",
        new: "",
        sold: "Sold",
        sale: "",
    },
    {
        id: 4,
        name: "SPRING SNOWFLAKE",
        section: "VARIOUS",
        price: "170",
        images:
            "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-11-img.jpg",
        new: "",
        sold: "",
        sale: "",
    },
    {
        id: 5,
        name: "SCARLET SAGE",
        section: "EXOTIC",
        price: "159",
        images:
            "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-12-img.jpg",
        new: "",
        sold: "",
        sale: "Sale",
    },
    {
        id: 6,
        name: "ROCK SOAPWORT",
        section: "CACTUSES",
        price: "259",
        images:
            "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-9-img.jpg",
        new: "",
        sold: "",
        sale: "",
    },
    {
        id: 7,
        name: "SUMMER SAVORY",
        section: "GREENS",
        price: "259",
        images:
            "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-8-img.jpg",
        new: "",
        sold: "",
        sale: "",
    },
    {
        id: 8,
        name: "WILD ROSES",
        section: "EXOTIC",
        price: "259",
        images:
            "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-7-img.jpg",
        new: "",
        sold: "",
        sale: "",
    },
    {
        id: 9,
        name: "CACTUS IN ORANGE",
        section: "CACTUSES",
        price: "259",
        images:
            "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-3-img.jpg",
        new: "",
        sold: "Sold",
        sale: "",
    },
    {
        id: 10,
        name: "WILD CACTUS",
        section: "CACTUSES",
        price: "159",
        images:
            "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/shop-5-img.jpg",
        new: "",
        sold: "",
        sale: "Sale",
    },
    {
        id: 11,
        name: "COLORFUL TULIPS",
        section: "EXOTIC",
        price: "350",
        images:
            "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/shop-6-img.jpg",
        new: "",
        sold: "",
        sale: "",
    },
    {
        id: 12,
        name: "PINK FLOWER TREE",
        section: "EXOTIC",
        price: "180",
        images:
            "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/shop-4-img.jpg",
        new: "",
        sold: "",
        sale: "",
    },
    {
        id: 13,
        name: "SCHEFFLERA",
        section: "EXOTIC",
        price: "259",
        images:
            "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/shop-1-img.jpg",
        new: "New",
        sold: "",
        sale: "",
    },
]
const CartAddPlace = document.getElementById("cart_adding_place")
const subtotal = document.querySelector(".total_sum_self")
const subtotalNav = document.querySelector(".total_products_nav")
const RedCartBanner = document.querySelector(".red_cart_banner")
// if (data.length > 0) {
//     data.slice(0, 8).map((element, index) => {
//         const Row = document.getElementById("map_row")
//         data1 = `
//         <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 px-4">
//         <div class="filter_card">
//             <div class="card_image">
//                 <img src="${element.images}"
//                     alt="">
//                     <span class="sale_banner">${element.sale}</span>
//                     <span class="sold_banner">${element.sold}</span>
//                     <span class="new_banner">${element.new}</span>
//             </div>
//             <div class="card_items">
//                 <h6>${element.name}</h6>
//                 <div class="card_action">
//                     <div class="card_btm_changing">
//                         <div class="card_cart">
//                             <span>Add to cart</span>
//                         </div>
//                         <div class="card_price">
//                             <span><small>$</small>${element.price}</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>`
//         Row.innerHTML += data1;
//     })
// }

for (var i of products.slice(0, 8)) {
    var col = document.createElement("div");
    col.classList.add(i.section, "col-xl-3", "col-lg-4", "col-md-6", "col-sm-12", "px-4", "hide",)
    var filterCard = document.createElement("div")
    filterCard.classList.add("filter_card")
    var CardImage = document.createElement("div")
    CardImage.classList.add("card_image")
    var image = document.createElement("img")
    image.setAttribute("src", i.images)
    var BannerSale = document.createElement("span")
    BannerSale.classList.add("sale_banner")
    BannerSale.innerText = i.sale
    var BannerSold = document.createElement("span")
    BannerSold.classList.add("sold_banner")
    BannerSold.innerText = i.sold
    var BannerNew = document.createElement("span")
    BannerNew.classList.add("new_banner")
    BannerNew.innerText = i.new
    CardImage.appendChild(image)
    CardImage.appendChild(BannerSale)
    CardImage.appendChild(BannerSold)
    CardImage.appendChild(BannerNew)
    filterCard.appendChild(CardImage)
    col.appendChild(filterCard)

    var cardItems = document.createElement("div");
    cardItems.classList.add("card_items");
    var productName = document.createElement("h6");
    productName.innerText = i.name
    var productAction = document.createElement("div")
    productAction.classList.add("card_action")
    var BtmChange = document.createElement("div")
    BtmChange.classList.add("card_btm_changing")
    var CardCart = document.createElement("div")
    CardCart.classList.add("card_cart")
    var CartBtn = document.createElement("span")
    CartBtn.innerText = "Add to cart"
    var CardPrice = document.createElement("div")
    CardPrice.classList.add("card_price")
    var Price = document.createElement("span")
    Price.innerText = "$" + i.price
    filterCard.appendChild(cardItems)
    cardItems.appendChild(productName)
    cardItems.appendChild(productAction)
    productAction.appendChild(BtmChange)
    BtmChange.appendChild(CardCart)
    CardCart.appendChild(CartBtn)
    BtmChange.appendChild(CardPrice)
    CardPrice.appendChild(Price)


    const Row = document.getElementById("map_row")
    if (Row) {
        Row.appendChild(col)
    }
    CartBtn.setAttribute("onclick", "AddToCart(id)");
    CartBtn.setAttribute("id", i.id);

    //CartBtn.onclick = function() { AddToCart(i.id) };

}


let cart = JSON.parse(localStorage.getItem("CART")) || []
updateCart()

function AddToCart(id) {
    if (cart.some((item) => item.id == id)) {
        ChangeNumberOfUnits("plus", id)
    } else {
        const item = products.find((product) => product.id == id)
        cart.push({
            ...item,
            numberOfUnits: 1,
        })
    }
    updateCart()
}

function updateCart() {
    renderCartItems();
    renderSubtotal();

    //save cart to Local Storage
    localStorage.setItem("CART", JSON.stringify(cart))
}


function renderSubtotal() {
    let totalPrice = 0, totalItems = 0;
    cart.forEach((item) => {
        totalPrice += item.price * item.numberOfUnits;
        totalItems += item.numberOfUnits
    })
    if (subtotalNav) {
        subtotalNav.innerHTML = `CART ($${totalPrice})`
    }
    if (subtotal) {
        subtotal.innerHTML = `$${totalPrice}`
    }
    if (RedCartBanner) {
        RedCartBanner.innerHTML = totalItems
    }
}


function renderCartItems() {
    if (CartAddPlace) {
        CartAddPlace.innerHTML = "";
    }
    cart.forEach((item) => {
        if (CartAddPlace) {
            CartAddPlace.innerHTML += `
            <li class="empty_cart_card">
              <div class="image_holder">
                <img src="${item.images}" alt="${item.name}">
              </div>
              <div class="card_info_holder">
                <h6>${item.name}</h6>
                <div class="card_numbers">
                    <div class="count_changing">
                      <span class="btn_minus" onclick="ChangeNumberOfUnits('minus', ${item.id})">-</span>
                      <span class="product_count">${item.numberOfUnits}</span>
                      <span class="btn_plus" onclick="ChangeNumberOfUnits('plus',  ${item.id})">+</span>
                    </div>
                    <span class="mini_product_price"><small>$</small>${item.price}</span>
                </div>              
              </div>
              <div class="cart_remover" onclick="removeItemFromCart(${item.id})">
                 <i class="fa-solid fa-xmark"></i>
              </div>
            </li>
            `
        }
    })
}

function removeItemFromCart(id) {
    cart = cart.filter((item) => item.id !== id)
    updateCart()
}

function ChangeNumberOfUnits(action, id) {
    cart = cart.map((item) => {

        let numberOfUnits = item.numberOfUnits
        if (item.id == id) {
            if (action === "minus" && numberOfUnits > 1) {
                numberOfUnits--
            } else if (action === "plus") {
                numberOfUnits++
            }
        }
        return {
            ...item,
            numberOfUnits,
        }
    })

    updateCart()
}


function filterProduct(value) {
    let Buttons = document.querySelectorAll(".button-value")
    Buttons.forEach((button) => {
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
        }
        else {
            button.classList.remove("active")
        }
    });
    let elements = document.querySelectorAll(".col-xl-3")
    elements.forEach((element) => {
        if (value == "all") {
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

window.onload = () => {
    filterProduct("all")
};


var swiper = new Swiper(".loop_slide", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});



