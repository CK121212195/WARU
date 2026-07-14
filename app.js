/*
===========================================
WARU APP
===========================================
*/

const imageInput=document.getElementById("imageInput");

const generateButton=document.getElementById("generateButton");

const downloadButton=document.getElementById("downloadButton");

const canvas=document.getElementById("canvas");

const ctx=canvas.getContext("2d");

let currentImage=null;



imageInput.addEventListener(

"change",

e=>{

const file=e.target.files[0];

if(!file)return;

const reader=new FileReader();

reader.onload=function(ev){

const img=new Image();

img.onload=function(){

currentImage=img;

previewImage();

};

img.src=ev.target.result;

};

reader.readAsDataURL(file);

}

);



function previewImage(){

canvas.width=currentImage.width;

canvas.height=currentImage.height;

ctx.drawImage(

currentImage,

0,

0

);

}


function generateMagazine(){

if(!currentImage){

alert("画像を選んでくれ");

return;

}

canvas.width=currentImage.width;

canvas.height=currentImage.height;

ctx.clearRect(

0,

0,

canvas.width,

canvas.height

);

ctx.drawImage(

currentImage,

0,

0,

canvas.width,

canvas.height

);

renderMagazine(

canvas,

ctx

);

}


generateButton.addEventListener(

"click",

generateMagazine

);


downloadButton.addEventListener(

"click",

()=>{

const link=document.createElement("a");

link.download=

"waru_"+

Date.now()+

".jpg";

link.href=

canvas.toDataURL(

"image/jpeg",

0.95

);

link.click();

}

);


