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


nextBtn.addEventListener("click", function () {
    currentImg = (++currentImg)%imgArr.length;
    console.log(currentImg);
    imgContainer.src = imgArr[currentImg];
    changeImgInfo();
});

prevBtn.addEventListener("click", function () {
    currentImg = (--currentImg + imgArr.length)%imgArr.length;
    console.log(currentImg);
    imgContainer.src = imgArr[currentImg];
    changeImgInfo();
});

function changeImgInfo(){
    imgInfo.innerText = `共有${imgArr.length}张图片，当前第${currentImg + 1}张`;
}


