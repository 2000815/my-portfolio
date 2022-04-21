const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const text = document.getElementById("text-box");

button1.onclick = function () {
  text.textContent = "不正解！！めっちゃ好き";
};

button2.onclick = function () {
  text.textContent = "ハズレ！タイムとか狙っちゃたりしてます笑笑";
};

button3.onclick = function () {
  text.textContent = "ハズレ！全国出場しました！！";
};

button4.onclick = function () {
  text.textContent = "ハズレ！サウナ好きすぎてサウナハット買いました！！";
};

button5.onclick = function () {
  text.textContent = "正解！！！！魚がかかるまで待てない人なんです笑笑！！";
};
