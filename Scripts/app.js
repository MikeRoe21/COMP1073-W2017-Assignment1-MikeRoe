/* JavaScript goes here */

//First test injecting JavaScript textural content into my index.html

var FirstParagraph = document.getElementById("FirstParagraph");
var Intro = "My name is Mike Roe. I am a first year student just trying to get my name out there.";
FirstParagraph.textContent = Intro;

var SecondParagraph = document.getElementById("SecondParagraph");
var Photo = "Here is a photo from last April of my graduating class in Haliburton, Ontario. I am in the back with the grey shirt and long hair";
SecondParagraph.textContent = Photo;






