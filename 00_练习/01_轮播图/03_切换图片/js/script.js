/**
 * 设置图片定时切换
 */
setTimeout(function nextImg() {
    let activeImg = document.querySelector(".img-list .activeImg");
    let nextActiveImg = activeImg.nextElementSibling || document.querySelector(".img-list li:first-child");
    activeImg.classList.remove("activeImg");
    nextActiveImg.classList.add("activeImg")
    setTimeout(nextImg,3000);
},3000);