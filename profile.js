/*
===========================================
WARU PROFILE GENERATOR
===========================================
*/

const PROFILE = {

name:[

"AKITO",
"SATOSHI",
"RYU",
"ZERO",
"JACK",
"LEON",
"KAI",
"REX",
"NOAH",
"BLACK",
"SHIN",
"TAIGA",
"VICE",
"REI",
"HAYATE",
"JIN",
"ALAN",
"LUCAS"

],

title:[

"Bitcoin Maximalist",
"Lightning Runner",
"HODL Junkie",
"Street Bitcoiner",
"Node Operator",
"Seed Guardian",
"Freedom Trader",
"SATS Collector",
"Chain Walker",
"Hash Warrior",
"Block Hunter",
"Coldcard Master"

],

weapon:[

"Bitcoin",
"Lightning",
"SATS",
"秘密鍵",
"ノード",
"Coldcard",
"Wallet",
"Seed Phrase",
"Taproot",
"Miniscript"

],

place:[

"東京",
"沖縄",
"大阪",
"札幌",
"福岡",
"ロンドン",
"香港",
"シンガポール",
"エルサルバドル",
"ニューヨーク",
"ラスベガス",
"ベルリン"

],

style:[

"中央集権を信用しない。",
"銀行を使う日は来ない。",
"今日もSATSだけを積み上げる。",
"暴落を笑う男。",
"値動きより信念を選ぶ。",
"チャートより人生を読む。",
"世界はBitcoinへ向かうと信じている。",
"秘密鍵だけは誰にも渡さない。",
"ハードウェアウォレットしか信用しない。",
"法定通貨は長く持たない。"

],

ending:[

"その背中を追う者は多い。",

"ストリートでも一目置かれる存在。",

"今日も自分だけのブロックを刻む。",

"妥協という文字を知らない。",

"世界はまだ彼を理解していない。",

"静かに伝説を積み重ねている。",

"誰よりも自由を愛する男。",

"暴落すら味方につける。",

"最後に笑うのは彼だ。",

"常識を置き去りにして走り続ける。"

]

};



function randomProfile(list){

return list[
Math.floor(Math.random()*list.length)
];

}



function makeAge(){

return Math.floor(

Math.random()*42

)+18;

}



function makeProfile(){

return{

name:

randomProfile(PROFILE.name),

age:

makeAge(),

title:

randomProfile(PROFILE.title),

weapon:

randomProfile(PROFILE.weapon),

place:

randomProfile(PROFILE.place),

style:

randomProfile(PROFILE.style),

ending:

randomProfile(PROFILE.ending)

};

}



function makeProfileText(profile){

return`

${profile.title}

${profile.weapon}を武器に

${profile.place}を拠点として活動。

${profile.style}

${profile.ending}

`;

}



/*
===========================================
誌面右下に出す紹介文
===========================================
*/

function makeMiniComment(){

const list=[

"ストリートで積み上げたSATSは裏切らない。",

"暴落を着こなす男。",

"Seed Phraseだけは肌身離さない。",

"誰もいない道を今日も歩く。",

"銀行口座よりノードを育てる。",

"価格より思想で勝負する。",

"人生はHODLで完成する。",

"Lightningが彼の日常だ。",

"自由だけが唯一のブランド。",

"中央集権にはもう戻れない。",

"世界より一歩先を歩く。",

"チャートは彼の履歴書だ。"

];

return randomProfile(list);

}
