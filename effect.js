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



/*
===========================================
メインコピー
===========================================
*/

function drawMainCatch(
ctx,
canvas
){

const catchcopy=makeBigCatch();

const layout=randomLayout();

const colors=[
"#ffffff",
"#ffcc00",
"#ff5a00"
];

const color=
colors[
Math.floor(
Math.random()*colors.length
)
];

const size=Math.floor(
canvas.height/14
);

if(layout==="LEFT"){

drawVerticalText(

ctx,

catchcopy,

50,

60,

size,

color

);

}

else if(layout==="RIGHT"){

drawVerticalText(

ctx,

catchcopy,

canvas.width-90,

60,

size,

color

);

}

else if(layout==="TOP"){

drawHorizontalText(

ctx,

catchcopy,

40,

40,

size,

color

);

}

else{

drawHorizontalText(

ctx,

catchcopy,

40,

canvas.height-size-40,

size,

color

);

}

}




