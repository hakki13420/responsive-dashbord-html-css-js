const menuIcon=document.querySelector(".menu-icon")
const main=document.querySelector("main")
const menuItems=document.querySelectorAll(".menu-item")
const brandp=document.querySelector(".brand p")
const navigation=document.querySelector(".navigation")
const p=document.querySelectorAll(".menu-item p")


menuIcon.onclick=function(){
    navigation.classList.toggle("navigation-click")
    p.forEach(el=>el.classList.toggle("width0"))
    menuItems.forEach(el=>el.classList.toggle("menu-item-click"))
    brandp.classList.toggle("width0")
    main.classList.toggle("menu-click")
}