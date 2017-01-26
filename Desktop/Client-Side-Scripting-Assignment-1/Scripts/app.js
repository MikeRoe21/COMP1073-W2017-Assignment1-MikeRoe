/* JavaScript goes here */

//First test injecting JavaScript textural content into my index.html

var FirstParagraph = document.getElementById("FirstParagraph");
var myContent = "My name is Mike Roe. I am a first year student just trying to get my name out there.";
FirstParagraph.textContent = myContent;