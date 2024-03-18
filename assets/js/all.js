"use stric"

let popupOpen = document.querySelector('#popup-menu-open');
let popupMenu = document.querySelector('.popup--wrap');
let popupClose = document.querySelector("#popup-meny-btn");
let popupMenuWrapper = document.querySelector('.popup--wrap');
let video = document.querySelector("#video")


popupOpen.addEventListener('click',()=>{
    document.body.style.scale="none";
    popupMenu.classList.toggle("popup")
})

popupClose.addEventListener('click',()=>{
    popupMenu.classList.toggle("popup")
    var iframeSrc = video.src;
         video.src = iframeSrc;
})


popupMenuWrapper.addEventListener('click' , (e)=>{
    if(e.target.classList.contains('popup--wrap')){
        popupMenu.classList.toggle("popup")
        // video.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
        var iframeSrc = video.src;
            video.src = iframeSrc;
    }
})





