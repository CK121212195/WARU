/*
===========================================
WARU BRAND GENERATOR
===========================================
*/

const BRAND = [

"Bitcoin",
"SATS",
"Lightning",
"HODL",
"Cold Wallet",
"Seed Phrase",
"Hash Rate",
"Genesis",
"Orange Pill",
"Freedom Chain",
"Street Node",
"Black Block",
"Dark Wallet",
"Silent Miner",
"Zero Trust",
"Block Hunter",
"Last Halving",
"Moon Runner",
"Shadow Chain",
"Iron Seed",
"Digital Gold",
"Peer to Peer",
"Proof of Work",
"Node Club",
"21 Million"

];


/*
===========================================
ブランド一覧
===========================================
*/

function shuffle(array){

const a=[...array];

for(let i=a.length-1;i>0;i--){

const j=Math.floor(Math.random()*(i+1));

[a[i],a[j]]=[a[j],a[i]];

}

return a;

}



function makeBrandList(){

const list=shuffle(BRAND);

return list.slice(0,5);

}



/*
===========================================
誌面表示文字列
===========================================
*/

function makeBrandText(){

const b=makeBrandList();

return [

"① "+b[0],

"② "+b[1],

"③ "+b[2],

"④ "+b[3],

"⑤ "+b[4]

].join("\n");

}



/*
===========================================
雑誌ラベル
===========================================
*/

const LABELS=[

"BITCOIN STREET STYLE",

"WARU SNAP",

"SPECIAL ISSUE",

"BLACK EDITION",

"LIMITED STYLE",

"SATS ONLY",

"HODL MODE",

"NO BANK",

"21M CLUB",

"ORANGE PILL",

"GENESIS EDITION",

"NODE STYLE",

"FREEDOM ISSUE",

"THE LAST BLOCK"

];



function makeLabel(){

return LABELS[

Math.floor(Math.random()*LABELS.length)

];

}



/*
===========================================
No.
===========================================
*/

function makeIssueNumber(){

const n=Math.floor(

Math.random()*999

)+1;

return String(n).padStart(3,"0");

}



/*
===========================================
age表示
===========================================
*/

function makeAgeLabel(age){

return "age "+age;

}



/*
===========================================
ランダムタグ
===========================================
*/

const TAGS=[

"MAXIMALIST",

"HODLER",

"STACKER",

"NODE",

"LEGEND",

"SATS",

"PROOF OF WORK",

"GENESIS",

"FREEDOM",

"ORANGE"

];



function makeTag(){

return TAGS[

Math.floor(Math.random()*TAGS.length)

];

}
