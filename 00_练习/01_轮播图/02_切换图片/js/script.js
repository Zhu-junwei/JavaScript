const imgArr = [
    'img/1.png',
    'img/2.png',
    'img/3.png',
    'img/4.png',
    'img/5.png'
]
let imgInfo = document.getElementById("img-info");
let imgContainer = document.getElementsByTagName("img")[0];
let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");
let currentImg = 0;
imgInfo.innerText = `共有${imgArr.length}张图片，当前第${currentImg + 1}张`;


/*点击按钮切换下一张图片*/
nextBtn.addEventListener("click", function () {
    nextImg();
    changeImgInfo();
});

/*点击按钮切换上一张图片*/
prevBtn.addEventListener("click", function () {
    currentImg = (--currentImg + imgArr.length)%imgArr.length;
    console.log(currentImg);
    imgContainer.src = imgArr[currentImg];
    changeImgInfo();
});

/*每个3秒自动切换下一张图片*/
setTimeout(function autoChgImg() {
    nextImg();
    changeImgInfo();
    setTimeout(autoChgImg, 3000);
},3000)

/*切换图片*/
function nextImg() {
    currentImg = (++currentImg)%imgArr.length;
    console.log(currentImg);
    imgContainer.src = imgArr[currentImg];
}

/*标题切换*/
function changeImgInfo(){
    imgInfo.innerText = `共有${imgArr.length}张图片，当前第${currentImg + 1}张`;
}


