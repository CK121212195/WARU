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




/*
===========================================
プロフィール描画
===========================================
*/

function drawProfile(ctx, canvas) {

    const p = makeProfile();

    const x = canvas.width * 0.05;
    const y = canvas.height * 0.72;

    ctx.save();

    ctx.fillStyle = "rgba(0,0,0,0.72)";
    ctx.fillRect(
        x - 20,
        y - 20,
        canvas.width * 0.42,
        canvas.height * 0.22
    );

    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 2;
    ctx.strokeRect(
        x - 20,
        y - 20,
        canvas.width * 0.42,
        canvas.height * 0.22
    );

    ctx.fillStyle = "#ffffff";

    ctx.font = "900 42px 'Noto Sans JP'";
    ctx.fillText(p.name, x, y);

    ctx.font = "900 26px 'Noto Sans JP'";
    ctx.fillStyle = "#ffb000";
    ctx.fillText("age " + p.age, x + 250, y);

    ctx.fillStyle = "#ffffff";

    ctx.font = "700 22px 'Noto Sans JP'";

    const lines = makeProfileText(p).trim().split("\n");

    let yy = y + 50;

    for (const line of lines) {

        ctx.fillText(line, x, yy);

        yy += 30;

    }

    ctx.restore();

}



/*
===========================================
ブランド一覧
===========================================
*/

function drawBrandList(ctx, canvas) {

    const text = makeBrandText().split("\n");

    const x = canvas.width * 0.73;
    const y = canvas.height * 0.70;

    ctx.save();

    ctx.fillStyle = "rgba(0,0,0,.75)";

    ctx.fillRect(

        x - 20,

        y - 20,

        canvas.width * 0.22,

        canvas.height * 0.22

    );

    ctx.strokeStyle = "#ffb000";

    ctx.lineWidth = 2;

    ctx.strokeRect(

        x - 20,

        y - 20,

        canvas.width * 0.22,

        canvas.height * 0.22

    );

    ctx.fillStyle = "#ffffff";

    ctx.font = "700 24px 'Noto Sans JP'";

    let yy = y;

    for (const line of text) {

        ctx.fillText(line, x, yy);

        yy += 34;

    }

    ctx.restore();

}



/*
===========================================
雑誌ラベル
===========================================
*/

function drawMagazineLabel(ctx, canvas) {

    ctx.save();

    ctx.fillStyle = "#ff5a00";

    ctx.fillRect(40, 40, 280, 58);

    ctx.fillStyle = "#ffffff";

    ctx.font = "900 30px 'Noto Sans JP'";

    ctx.fillText(makeLabel(), 55, 78);

    ctx.restore();

}



/*
===========================================
ページ番号
===========================================
*/

function drawIssue(ctx, canvas){

ctx.save();

ctx.font="900 28px 'Noto Sans JP'";

ctx.fillStyle="#ffffff";

ctx.textAlign="right";

ctx.fillText(

"No."+makeIssueNumber(),

canvas.width-40,

50

);

ctx.restore();

}



/*
===========================================
レア表示
===========================================
*/

function drawRank(ctx){

const r=makeRank();

ctx.save();

ctx.font="900 36px 'Noto Sans JP'";

ctx.fillStyle=r.color;

ctx.strokeStyle="black";

ctx.lineWidth=5;

ctx.strokeText(

r.name,

45,

145

);

ctx.fillText(

r.name,

45,

145

);

ctx.restore();

}

/*
===========================================
フィルムノイズ
===========================================
*/

function drawNoise(ctx, canvas){

ctx.save();

const count=Math.floor(canvas.width*canvas.height/180);

for(let i=0;i<count;i++){

const x=Math.random()*canvas.width;
const y=Math.random()*canvas.height;

const a=Math.random()*0.12;

ctx.fillStyle="rgba(255,255,255,"+a+")";

ctx.fillRect(x,y,1,1);

}

ctx.restore();

}



/*
===========================================
細いキズ
===========================================
*/

function drawScratch(ctx,canvas){

ctx.save();

ctx.strokeStyle="rgba(255,255,255,.06)";

for(let i=0;i<12;i++){

ctx.beginPath();

const x=Math.random()*canvas.width;

ctx.moveTo(x,0);

ctx.lineTo(

x+(Math.random()-0.5)*50,

canvas.height

);

ctx.stroke();

}

ctx.restore();

}

/*
===========================================
ビネット
===========================================
*/

function drawVignette(ctx,canvas){

const g=ctx.createRadialGradient(

canvas.width/2,
canvas.height/2,
canvas.height*0.2,

canvas.width/2,
canvas.height/2,
canvas.height*0.9

);

g.addColorStop(0,"rgba(0,0,0,0)");

g.addColorStop(1,"rgba(0,0,0,.45)");

ctx.save();

ctx.fillStyle=g;

ctx.fillRect(

0,
0,
canvas.width,
canvas.height

);

ctx.restore();

}



/*
===========================================
オレンジ帯
===========================================
*/

function drawAccent(ctx,canvas){

ctx.save();

ctx.fillStyle="#ff5a00";

ctx.fillRect(

0,

canvas.height*0.64,

canvas.width,

6

);

ctx.fillRect(

0,

120,

canvas.width,

3

);

ctx.restore();

}



/*
===========================================
雑誌タイトル
===========================================
*/

function drawMagazineTitle(ctx){

ctx.save();

ctx.font="900 70px 'Noto Sans JP'";

ctx.strokeStyle="black";

ctx.lineWidth=10;

ctx.fillStyle="#ffffff";

ctx.strokeText(

"WARU",

40,

90

);

ctx.fillText(

"WARU",

40,

90

);

ctx.font="900 22px 'Noto Sans JP'";

ctx.fillStyle="#ffb000";

ctx.fillText(

"BITCOIN STREET STYLE",

45,

125

);

ctx.restore();

}



/*
===========================================
完成
===========================================
*/

function renderMagazine(

canvas,
ctx

){

drawMainCatch(ctx,canvas);

drawMagazineTitle(ctx);

drawMagazineLabel(ctx,canvas);

drawIssue(ctx,canvas);

drawRank(ctx);

drawProfile(ctx,canvas);

drawBrandList(ctx,canvas);

drawAccent(ctx,canvas);

drawNoise(ctx,canvas);

drawScratch(ctx,canvas);

drawVignette(ctx,canvas);

}
