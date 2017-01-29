/* JavaScript goes here */

//First test injecting JavaScript textural content into my index.html

var FirstParagraph = document.getElementById("FirstParagraph");
var Intro = "My name is Mike Roe. I am a first year student just trying to get my name out there.";
FirstParagraph.textContent = Intro;

var SecondParagraph = document.getElementById("SecondParagraph");
var Test = "This is a test of JS";
SecondParagraph.textContent = Test;

var ContactText = document.getElementById("ContactText");
var ContactText = "testing";
ContactText.textContent = ContactText;

