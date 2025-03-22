/********************
 * HTMLIMAGEELEMENT *
 ********************/
// This example is for educational purposes, but it is not going to work. 
var imageElement = document.createElement("img");
imageElement.src = "img.jpg";
imageElement.alt = 'image';
if (imageElement.complete) {
    console.log("Image dimension: ".concat(imageElement.naturalWidth, " x ").concat(imageElement.naturalHeight));
}
else {
    imageElement.addEventListener("load", function () {
        console.log("Image dimension: ".concat(imageElement.naturalWidth, " x ").concat(imageElement.naturalHeight));
    });
}
