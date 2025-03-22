/********************
 * HTMLIMAGEELEMENT *
 ********************/

// This example is for educational purposes, but it is not going to work. 
const imageElement: HTMLImageElement = document.createElement("img");
imageElement.src = "img.jpg";
imageElement.alt = 'image';

if (imageElement.complete) {
    console.log(`Image dimension: ${imageElement.naturalWidth} x ${imageElement.naturalHeight}`)
} else {
    imageElement.addEventListener("load", ()=> {
        console.log(`Image dimension: ${imageElement.naturalWidth} x ${imageElement.naturalHeight}`)
    });
}