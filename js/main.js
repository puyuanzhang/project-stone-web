let img; // 声明变量 'img'
let stone1;
let stone2;
class stone{
    constructor(img,x,y,dim,speed){
        this.img = img;
        this.x = x;
        this.y = random(height);
        this.dim = dim;
        this.speed = speed;
    }
    put(){
        image(this.img, this.x, this.y, this.img.width / 3, this.img.height / 3);
    }
    update(){
        this.x = this.x + this.speed
        if (this.x > this.width + this.dim) {
            this.x = -this.dim;
        }
    }
}

function setup() {
    createCanvas(1080, 720);
    img = loadImage('res/women.png');
    stone1 = new stone(img,0,0,80,3);
    stone2 = new stone(img,0,0,70,3);
}

function draw() {
    // 在坐标(0, 0)，显示原图大小的图像 
    background(0);
    stone1.put();
    stone1.update();
    stone2.put();
    stone2.update();
   
}