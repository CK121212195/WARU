/*
===========================================
WARU EFFECT ENGINE
===========================================
*/

const Layouts=[

"LEFT",

"RIGHT",

"TOP",

"BOTTOM"

];

function randomLayout(){

return Layouts[
Math.floor(Math.random()*Layouts.length)
];

}

function strokeText(ctx,text,x,y,size,color){

ctx.save();

ctx.font="900 "+size+"px 'Noto Sans JP'";

ctx.fillStyle=color;

ctx.strokeStyle="black";

ctx.lineWidth=size*0.18;

ctx.textBaseline="top";

ctx.strokeText(text,x,y);

ctx.fillText(text,x,y);

ctx.restore();

}


/*
===========================================
縦書き
===========================================
*/

function drawVerticalText(
ctx,
text,
x,
y,
size,
color
){

ctx.save();

ctx.font="900 "+size+"px 'Noto Sans JP'";

ctx.fillStyle=color;

ctx.strokeStyle="black";

ctx.lineWidth=size*0.18;

ctx.textBaseline="top";

const chars=[...text];

let yy=y;

for(const c of chars){

ctx.strokeText(c,x,yy);

ctx.fillText(c,x,yy);

yy+=size*1.05;

}

ctx.restore();

}


/*
===========================================
横書き
===========================================
*/

function drawHorizontalText(
ctx,
text,
x,
y,
size,
color
){

strokeText(
ctx,
text,
x,
y,
size,
color
);

}
