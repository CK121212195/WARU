/*
===========================================
WARU Bitcoin Edition
名言ジェネレーター
===========================================
*/

const WORD = {

subject:[

"俺",
"俺達",
"Bitcoin",
"SATS",
"Lightning",
"HODL",
"秘密鍵",
"ノード",
"Coldcard",
"Blockstream",
"Seed",
"マイナー",
"BTC",
"ウォレット"

],

verb:[

"支配する",
"裏切らない",
"焼き尽くす",
"貫く",
"刻み込む",
"解き放つ",
"踏み潰す",
"積み上げる",
"抱き締める",
"救い出す",
"突き抜ける",
"黙らせる"

],

enemy:[

"銀行",
"円",
"ドル",
"税金",
"常識",
"欲望",
"悲観",
"弱気",
"中央集権",
"アルト",
"暴落",
"ニュース"

],

adj:[

"熱い",
"黒い",
"危険な",
"美しい",
"残酷な",
"静かな",
"最狂の",
"圧倒的な",
"野生の",
"不敵な",
"孤高の"

],

noun:[

"説得力",
"革命",
"未来",
"神話",
"生き様",
"覚悟",
"流儀",
"答え",
"本能",
"正義",
"野望"

]

};



const TEMPLATE=[

"{A}は{B}より{C}",

"{A}だけが{B}を{C}",

"{A}に舞い、{B}に酔う",

"{A}を信じろ。{B}は裏切る",

"{A}は今日も{B}を笑う",

"{A}を積む。それが{B}",

"{A}こそ最後の{B}",

"{A}より残酷な{B}",

"{A}は{B}を知らない",

"{A}は黙って{B}",

"{A}だけが未来を買っている",

"{A}に敗北は似合わない",

"{A}は暴落で完成する",

"{A}は暴騰で終わらない",

"{A}は俺を選んだ",

"世界は{A}を待っていた",

"{A}こそ本物",

"{A}は神話になる",

"{A}に言い訳は不要",

"{A}の後ろ姿が答えだ"

];



function random(array){

return array[
Math.floor(Math.random()*array.length)
];

}



function makeQuote(){

const t=random(TEMPLATE);

return t

.replace("{A}",

random([

...WORD.subject,
...WORD.adj,
...WORD.noun

]))

.replace("{B}",

random([

...WORD.enemy,
...WORD.subject,
...WORD.noun

]))

.replace("{C}",

random([

...WORD.verb,
...WORD.adj

]));

}



/*
===========================================
誌面用巨大コピー
===========================================
*/

function makeBigCatch(){

const list=[

"千の言葉より残酷な俺という説得力",

"エレガントに舞い、クレイジーに酔う",

"ストリートでHODLするために生まれてきた",

"Seedだけは誰にも渡さない",

"暴落は俺を裏切らない",

"銀行よりBitcoinを信じろ",

"世界はまだ俺を理解していない",

"Lightningだけが夜を照らす",

"俺の未来は秘密鍵の中にある",

"中央集権に別れを告げる"

];



if(Math.random()<0.65){

return random(list);

}

return makeQuote();

}



/*
===========================================
ランク
===========================================
*/

function makeRank(){

const r=Math.random();

if(r<0.01){

return{

name:"LEGEND",

color:"#ffd700"

};

}

if(r<0.05){

return{

name:"★★★★★",

color:"#ffb000"

};

}

if(r<0.15){

return{

name:"★★★★",

color:"#ff5500"

};

}

if(r<0.35){

return{

name:"★★★",

color:"#ffffff"

};

}

return{

name:"★★",

color:"#bbbbbb"

};

}
