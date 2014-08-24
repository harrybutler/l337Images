var num;
var str = "Zmhzc2Zoc2Zoc2ZoZmhzZmhz"; //document.getElementById('base64textarea').value;
/*function base64_to_base10() {
    var base10Alphabet = [4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84, 88, 92, 96, 100, 104, 108, 112, 116, 120, 124, 128, 132, 136, 140, 144, 148, 152, 156, 160, 164, 168, 172, 176, 180, 184, 188, 192, 196, 200, 204, 208, 212, 216, 220, 224, 228, 232, 236, 240, 244, 248, 252, 256, 260, 264, 268, 272, 276, 280, 284, 288, 292, 296, 300, 304, 308, 312, 316, 320, 324, 328, 332, 336, 340, 344, 348, 352, 356, 360, 364, 368, 372, 376, 380, 384, 388, 392, 396, 400]
    var splitstr = str.split("");
for(i = 0; i < splitstr.length; i++)
           {
               if (splitstr[i] == "
           }

document.getElementById('base64textarea').value = num;     
}*/
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
