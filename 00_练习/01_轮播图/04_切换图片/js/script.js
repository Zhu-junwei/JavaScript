/**
 * 设置图片定时切换
 */
const toggleChange = (function () {
    let timer = null;
    return () => {
        if (timer === null) {
            timer = setTimeout(function nextImg() {
                changeNextImg(1);
                timer = setTimeout(nextImg,3000);
            },3000);
        } else {
            clearTimeout(timer);
            timer = null;
        }
    }
}());
toggleChange();

/*设置鼠标移入后不切换图片*/
let imgOuter = document.getElementsByClassName("outer")[0];
imgOuter.onmouseenter = ()=>  {
    toggleChange();
}
imgOuter.onmouseleave = ()=>  {
    toggleChange();
}


/*获取前后切换图片按钮，并绑定点击事件*/
let swiperButtonNext = document.getElementsByClassName("swiper-button-next")[0];
let swiperButtonPrev = document.getElementsByClassName("swiper-button-prev")[0];

swiperButtonNext.addEventListener("click",function () {
    changeNextImg(1);
});
swiperButtonPrev.addEventListener("click", function () {
    changeNextImg(0);
});

/*切换图片函数*/
function changeNextImg(direction) {
    let activeImg = document.querySelector(".img-list .activeImg");
    let nextActiveImg
    if (direction){
        nextActiveImg = activeImg.nextElementSibling || document.querySelector(".img-list li:first-child");
    } else {
        nextActiveImg = activeImg.previousElementSibling || document.querySelector(".img-list li:last-child");
    }
    activeImg.classList.remove("activeImg");
    nextActiveImg.classList.add("activeImg")
}