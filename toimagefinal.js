var num;
var str = document.getElementById('base64textarea').value;
function base64_to_base10(str) {
    var order = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";
    var base = order.length;
    var num = 0, r;
    while (str.length) {
        r = order.indexOf(str.charAt(0));
        str = str.substr(1);
        num *= base;
        num += r;
    }
    return num;
}
document.body.innerHTML += '<canvas id="canvas1"></canvas>';
document.getElementById('someBox').innerHTML = '<canvas id="canvas1"></canvas>';
var canvas = document.getElementById('canvas1');
canvas.width = 100;
canvas.height = 100;
var pixels = canvas.width * canvas.height;
function setPixel(imageData, x, y, r, g, b, a) {
index = (x + y * imageData.width) * 4;
imageData.data[index+0] = r;
imageData.data[index+1] = g;
imageData.data[index+2] = b;
imageData.data[index+3] = a;
}
element = document.getElementById("canvas1");
c = element.getContext("2d");
// read the width and height of the canvas
width = element.width;
height = element.height;
// create a new pixel array
imageData = c.createImageData(width, height);
// draw random dots
for (i = 0; i < pixels; i++) {
x = Math.random() * width | 0; // |0 to truncate to Int32
y = Math.random() * height | 0;
r = Math.random() * 256 | 0;
g = Math.random() * 256 | 0;
b = Math.random() * 256 | 0;
setPixel(imageData, x, y, r, g, b, 255); // 255 opaque
}
// copy the image data back onto the canvas
c.putImageData(imageData, 0, 0); // at coords 0,0
