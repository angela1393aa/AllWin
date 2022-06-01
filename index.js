// 漢堡選單
$("#menu").on("click", function () {
  $("nav").toggle();
});
//頁面滑動
$(function () {
  $("a[href*=#]").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      { scrollTop: $($(this).attr("href")).offset().top - 90 },
      500,
      "linear"
    );
  });
});
//遊戲
let crab = document.querySelector(".crab");
let btn = document.querySelector("#btn");
let start = document.querySelector(".start");
let gameover = document.querySelector(".gameover");
crab.style.top = "4rem";
theClockX = 0;
arr = true;
setInterval(drawHouse, 90);
function drawHouse() {
  if (arr === true) {
    theClockX++;
    clientX = theClockX % 55;
    crab.style.left = clientX + "rem";
  }
}
btn.onclick = () => {
  arr = false;
  crab.style.top = "10rem";
  start.style.background = "url(../images/4-1.png)";
  setInterval(drawGameover, 1000);
  function drawGameover() {
    gameover.style.display = "block";
  }
};
//Canvas
// arr = [
//   { x: 60, y: 380, width: 100, height: 55, content: "一", color: "green" },
// ];
// cvs = document.getElementById("myCanvas");
// ctx = cvs.getContext("2d");
// draw();
// theClockX = 0; //計時器
// theClockY = 0; //計時器
// setInterval(drawHouse, 30); //每30毫秒+1
// let clientX = 0;
// let clientY = 0;

// //对事件进行监听
// cvs.addEventListener(
//   "click",
//   (e) => {
//     p = getEventPosition(e); //滑鼠點擊位置
//     //判断点击了那个矩形
//     if (
//       arr[0].y <= p.y &&
//       p.y <= arr[0].height + arr[0].y &&
//       arr[0].x <= p.x &&
//       p.x <= arr[0].width + arr[0].x
//     ) {
//       console.log("你点击了第一个矩形", p);
//       setInterval(clickY, 30); //每30毫秒+1
//       function clickY() {
//         theClockX--;
//         theClockY++;
//         clientY = theClockY % 100;
//       }
//     }
//   },
//   false
// );

// //注：使用这个函数，需要给Canvas元素的position设为absolute。
// //要判断事件对象发生的位置，事件对象e的layerX和layerY属性表示Canvas内部坐标系中的坐标
// function getEventPosition(ev) {
//   var x, y;
//   if (ev.layerX || ev.layerX == 0) {
//     x = ev.layerX;
//     y = ev.layerY;
//   } else if (ev.offsetX || ev.offsetX == 0) {
//     // Opera
//     x = ev.offsetX;
//     y = ev.offsetY;
//   }
//   return { x: x, y: y };
// }

// //画图像
// function draw(p) {
//   var who = [];
//   ctx.clearRect(0, 0, cvs.width, cvs.height);
//   arr.forEach(function (v, i) {
//     ctx.beginPath();
//     ctx.rect(v.x, v.y, v.width, v.height);
//     ctx.font = "20px Georgia";
//     ctx.fillStyle = v.color;
//     ctx.fillText(v.content, 0, v.y + 20);
//     ctx.stroke();
//     if (p && ctx.isPointInPath(p.x, p.y)) {
//       //如果传入了事件坐标，就用isPointInPath判断一下
//       //如果当前环境覆盖了该坐标，就将当前环境的index值放到数组里
//       who.push(i);
//     }
//   });
//   //根据数组中的index值，可以到arr数组中找到相应的元素。
//   return who;
// }

// function drawHouse() {
//   theClockX++;
//   clientX = (theClockX % 180) - 10;
//   //背景
//   let pic = new Image();
//   pic.src = "./images/2.png";
//   pic.addEventListener("load", function () {
//     ctx.drawImage(pic, 0, 0, myCanvas.width, myCanvas.height);
//   });
//   // 搖桿
//   let pic2 = new Image();
//   pic2.src = "./images/3.png";
//   pic2.addEventListener("load", function () {
//     ctx.drawImage(pic2, 90, 250, 240, 150);
//   });
//   // 按鈕
//   let pic3 = new Image();
//   pic3.src = "./images/4.png";
//   pic3.addEventListener("load", function () {
//     ctx.drawImage(pic3, 50, 345, 85, 55);
//   });
//   // 螃蟹
//   let pic1 = new Image();
//   pic1.src = "./images/1.png";
//   pic1.addEventListener("load", function () {
//     ctx.drawImage(pic1, clientX, clientY + 58, 130, 100);
//   });
//   // 橡皮擦畫之前要先擦掉再畫
//   ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
// }
