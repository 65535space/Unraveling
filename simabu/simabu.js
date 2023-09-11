import youtuber from "./foo";// youtuberプロパティの定義元にアクセスする
youtuber.plan();//foo.jsからメソッドを取り出す

/**
 * Q. 変数とは?
 * A.データを保存しておくための箱。
 */
const foo = document.getElementById("foo");

const fooWidth1 = foo.offsetWidth;

const fooHeight = foo.offsetHeight;

const fooArea = fooWidth1 * fooHeight;


/**
 * 変数　const,let,var
 * const 変数名 = 初期値;
 * let 変数名 = 初期値;
 * var 変数名 = 初期値;
 */

const foo1 = 100;
const foo_width = 100;//snake_Case
const fooWidth = 100;//camelCase
const _foo = 100;
const $foo3 = 1000;

let bar = 200;

var baz = 300;

/**
 * const の特徴
 * 再代入できない，再定義できない。
 */
const constNumber = 100;
constNumber = 200;//再代入

const constNumber = 100;
const constNumber = 200; //再定義

const obj = {
    foo: 123
};

console.log(obj.foo);

obj.foo = 456;

console.log(obj.foo);

/**
 * let の特徴
 * 再代入できる，再定義できない。
 */
let letNumber = 100;
letNumber = 200;

console.log("再代入ok!");

console.log(letNumber);

let letNumber = 300;//再定義不可

/**
 * var の特徴
 * 再代入できる，再定義できる。
 */

var varNumber = 100;
varNumber = 200;

console.log("再代入ok!");

console.log(varNumber);

var varNumber = 300;

console.log(varNumber);

/**
 * 1．関数とは何か?
 * タスクや値計算を実行する文の集まり(MDN)
 */


//2.短縮記法
const lol = {
    //元々 alert: function () {},
    alert() { },
};

/* 3．関数の基礎について理解する。
 * return の有無で何が違うのか
*/
function cut(food) {
    //切る処理
    const cutFood = foo.onselectionchange();
    return cutFood;
}

const cutCarrot = cut(carrot);
const cutPotato = cut(potato);

function throwAway(food) {
    //捨てる処理
    deletefood;
}

//もう一つ
function isTweetable(text) {
    return text.length <= 1;
}
console.log(isTweetable("f"));
console.log(isTweetable("foo"));

function alertTweetable(text) {
    if (isTweetable(text)) {
        alert("you can tweet!");
    }
    else {
        alert("you can't tweet!");
    }
}
alertTweetable("f");

/**
 * 4．匿名(無名)関数について理解する
 * 関数は値として利用できる(関数式)
 */

const isTweetable = function (text) {
    return text.length <= 3;
};

console.log(isTweetable("foo"));

function alertTweetable(text) {
    if (isTweetable(text)) {
        alert("you can tweet!");
    }
    else {
        alert("you can't tweet!");
    }
};

/**
 * 5．コールバック関数について理解する
 * Windowオブジェクトのメソッド等でもよく使われます
 * 
 * function 高階関数(コールバック関数){
 * コールバック関数()；
 * }
 * 
 * 引数に関数を入れる
 */

//普通にやる場合
function bring(food) {
    if (/**手洗いが終えたら */) {
        //食材をもってきてもらう処理
    }
};
function peer(food) {
    if (/**手洗いが終えたら */) {
        //食材の皮をむく処理
    }
};
function cut(food) {
    if (/**手洗いが終えたら */) {
        //食材を切ってもらう処理
    }
};

//高階関数を使った場合
function washed(fn) {
    if (/**手洗いを終えたら かつ　宿題を終えたら*/) {
        fn();//コールバック関数の処理
    }
};

function bring(food) {
    //食材を持ってきてもらう処理
};

function peer(food) {
    //食材の皮をむく処理
};

function cut(food) {
    //食材を切ってもらう処理
};

//コールバック関数に引数を入れたい場合

function washed(fn, food) {
    if (/**手洗いを終えたら かつ　宿題を終えたら*/) {
        fn(food);//コールバック関数の処理
    }
};

function bring(food) {
    //食材を持ってきてもらう処理
};

function peer(food) {
    //食材の皮をむく処理
};
function cut(food) {
    //食材を切ってもらう処理
};

washed(peer, "玉ねぎ");

/**実用例 Twitter*/
const unfollow = function () {
    console.log("フォローを外しました。");
}

const cancelTweet = function () {
    console.log("Tweetをキャンセルしました。");
}

function confirmed(fn) {
    if (window.confirm("実行しますか?")) {
        fn();
    }
}

confirmed(unfollow);
confirmed(cancelTweet);

/**case2 githubのレポジトリを消す場合*/
function confirmed(fn) {
    const input = window.prompt("実行しますか?yes or no");
    if (input == "yes") {
        fn();
    }
}
confirmed(function () {
    console.log("レポジトリを削除");
});

/**2.1 if文の位置を変える場合*/

function confirmed(fn) {
    const input = window.prompt("実行しますか?yes or no");
    fn(input);
}

confirmed(function (input) {
    if (input === "yes") {
        console.log("レポジトリを削除");
    }
});

/**Document メソッド*/
const btn = document.getElementById("button");

btn.addEventListener("click", function () {
    console.log("フォロー解除");
});

/**JavaScript標準メソッド(forEach)
 * 配列を繰り返す
 */
const foods = ["にんじん", "ジャガイモ", "玉ねぎ"];

foods.forEach(function (food) {
    console.log(food);
});

/**Web APIとは??
 * 実際に叩いてみよう→ https://jsonplaceholder.typicode.com/
 * 
 * バックエンドの仕事→APIをつくる
 * 主にフロントエンドはバックエンドが作ったAPIを使ってUIを構築する。
 * APIをプログラム側(JavaScript)から叩いてデータのやり取りを行う。
 */

/**第9回目のhtmlfile
 * <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <p>Chrome DevTools で consolewo を開いてね</p>
    <script src="index.js"></script>

</body>

</html>

jsfile

async function callApi() {
    //実際にAPIを叩く
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    console.log(users);
}

callApi();

/**async await -> fetch -> Responseオブジェクトが返ってくる 
 */
 * /