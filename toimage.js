var handleFileSelect = function(evt) {
    var files = evt.target.files;
    var file = files[0];

    if (files && file) {
        var reader = new FileReader();

        reader.onload = function(readerEvt) {
            var binaryString = readerEvt.target.result;
            document.getElementById("base64textarea").value = btoa(binaryString);
        };

        reader.readAsBinaryString(file);
        var base64 = reader.readAsBinaryString(file);
        var chars = base64.split('');
        var cWidth = base64.length;
    }
};

if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('filePicker').addEventListener('change', handleFileSelect, false);
} else {
    alert('The File APIs are not fully supported in this browser.');
}
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
width = cWidth;
height = "1";

// create a new pixel array
imageData = c.createImageData(width, height);

// draw random dots
for (i = 0; i < cWidth; i++) {
    x = Math.random() * width | 0; // |0 to truncate to Int32
    y = Math.random() * height | 0;
    r = Math.random() * 256 | 0;
    g = Math.random() * 256 | 0;
    b = Math.random() * 256 | 0;
    setPixel(imageData, x, y, r, g, b, 255); // 255 opaque
}

// copy the image data back onto the canvas
c.putImageData(imageData, 0, 0); // at coords 0,0
