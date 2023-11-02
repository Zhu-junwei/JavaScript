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
    //下一张
    changeNextImg(1);
});
swiperButtonPrev.addEventListener("click", function () {
    //上一张
    changeNextImg(0);
});

/*切换图片函数*/
function changeNextImg(direction) {
    let activeImg = document.querySelector(".img-list .activeImg");
    let imgArray = Array.from(document.querySelectorAll(".img-list li"));
    let activeIndex= imgArray.indexOf(activeImg);
    let nextActiveIndex;
    if (direction){
        nextActiveIndex = (activeIndex + 1)%imgArray.length
    } else {
        nextActiveIndex = (activeIndex - 1 + imgArray.length)%imgArray.length
    }
    changeImgToIndex(nextActiveIndex);
}

/*切换图片及导航点的位置*/
function changeImgToIndex(index) {
    //切换图片
    let currentActiveImg = document.querySelector(".img-list li.activeImg");
    currentActiveImg.classList.remove("activeImg");
    document.querySelectorAll(".img-list li")[index].classList.add("activeImg");
    //切换点
    let currentActivePointer = document.querySelector(".home-hero-pointer .active");
    currentActivePointer.classList.remove("active");
    document.querySelectorAll(".home-hero-pointer div")[index].classList.add("active");
}

/*添加导航点*/
(function () {
    let imgList = document.querySelectorAll(".img-list li");
    let homeHeroPointer = document.getElementsByClassName("home-hero-pointer")[0];
    for (let imgLi of imgList) {
        if (imgLi.classList.contains("activeImg")){
            homeHeroPointer.insertAdjacentHTML("beforeend","<div class='pointer active'><a href='javascript:'></a></div>")
        } else {
            homeHeroPointer.insertAdjacentHTML("beforeend","<div class='pointer'><a href='javascript:'></a></div>")
        }
    }
}());

/*导航点点击事件*/
let pointers = Array.from(document.querySelectorAll(".pointer"));
document.addEventListener('click', (evt) => {
    let pointerIndex = pointers.indexOf(evt.target);
    if (pointerIndex !== -1){
        //切换图片
        // let currentActiveImg = document.querySelector(".img-list li.activeImg");
        // currentActiveImg.classList.remove("activeImg");
        // document.querySelectorAll(".img-list li")[pointerIndex].classList.add("activeImg");
        //切换点
        // let currentActivePointer = document.querySelector(".home-hero-pointer .active");
        // currentActivePointer.classList.remove("active");
        // evt.target.classList.add("active");
        changeImgToIndex(pointerIndex);
    }
});
