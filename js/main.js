let img; // 声明变量 'img'

function setup() {
    createCanvas(1080, 720);
    img = loadImage('res/women.png'); // 加载图像
}

let x = 0
let y = 0
let speed = 1
function update(){
    x = x + speed;
}

function draw() {
    // 在坐标(0, 0)，显示原图大小的图像 
    background(0);
    image(img, x, y, img.width / 3, img.height / 3);
    
   
    
}