console.log('----------id指定----------');
let hoge = document.getElementById('hoge');
console.log(hoge);
console.log(hoge.tagName);
console.log(hoge.id);
console.log(hoge.textContent);

console.log('----------class指定----------');
let fuga = document.getElementsByClassName('fuga');
console.log(fuga);
for (let i = 0, len = fuga.length; i < len; i++) {
  console.log(fuga.item(i).textContent);
}

console.log('----------タグ指定----------');
let list = document.getElementsByTagName('li');
console.log(list);
for (let i = 0, len = list.length; i < len; i++) {
  console.log(list.item(i).textContent);
}

//ノードウォーキング
console.log('----------親子要素の取得----------');
let fruits = document.getElementById('fruits');
console.log(fruits);

console.log('----------親');
let parent = fruits.parentNode;
console.log(parent);
console.log(parent.id);

console.log('----------子');
let children = fruits.children;
console.log(children);
for (let item of fruits) {
  console.log(item.textContent);
}

console.log('----------イベント----------');
let btn = document.getElementById('btn');
// document.getElementById('btn').addEventListener('click', function() {
btn.addEventListener('click', function() {
  window.alert('ボタンがクリックされました');
});

console.log('----------要素の追加----------');
let add = document.getElementById('add');
add.addEventListener('click', function() {
  let target = document.getElementById('target');
  target.textContent = '追加ボタンがクリックされました'
});

console.log('----------スタイルの変化----------');
let change = document.getElementById('change');
change.addEventListener('click', function() {
  let target = document.getElementById('target2');

  //直接スタイルを指定
  target.style.backgroundColor = '#000';

  //classを追加(削除)
  target.classList.add('large'); //classを追加
  // target.classList.remove('large'); //class削除
  // target.classList.toggle('large'); //toggle
});

console.log('----------関数----------');
/**
 * 書き方③を使う(PHPと同じ構文のため)
 * google検索した時に混乱しないよう複数書き方があることは説明
 */

//書き方①
// let changeBg = function() {
//   let target = document.getElementById('target3');
//   target.classList.toggle('bg-dark');
//   target.classList.toggle('bg-red');
// }

//書き方②
// let changeBg = () => {
//   let target = document.getElementById('target3');
//   target.classList.toggle('bg-dark');
//   target.classList.toggle('bg-red'); 
// }

//書き方③
function changeBg() {
  let target = document.getElementById('target3');
  target.classList.toggle('bg-dark');
  target.classList.toggle('bg-red');
}

let func = document.getElementById('func');
func.addEventListener('click', changeBg);

