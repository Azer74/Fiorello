const openBtn=document.querySelector(".open-menu")
const openItems=document.querySelector("#menu-body")


if(openBtn){
    openBtn.addEventListener("click",()=>{
        if(openItems.style.transform=="translateX(0px)"){
            openItems.style.transform="translateX(-100%)"
            openItems.style.opacity="1"
        }
        else{
            openItems.style.transform="translateX(0px)"
            openItems.style.opacity="0"
        }
    })
}

const closeBtn = document.querySelector(".close_button")

if (closeBtn) {
    closeBtn.addEventListener("click", () => {
        openItems.style.transform = "translateX(0px)"
        openItems.style.opacity="0"
    })

}

const navSearch=document.querySelector(".nav_search")
const SearchPopUP=document.querySelector(".search_popup")

if (navSearch) {
    navSearch.addEventListener("click",()=>{
        if (SearchPopUP.style.height=="0px") {
            SearchPopUP.style.height="100%"
        }
        else{
            SearchPopUP.style.height="0px"
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