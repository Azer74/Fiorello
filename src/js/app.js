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