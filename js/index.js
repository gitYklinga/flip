function flipRow1() {
  var imgarr = [
    "./img/z1.png",
    "./img/z1.png",
    "./img/z2.png",
    "./img/tt2.png",
    "./img/tt1.png",
    "./img/tt1.png",
  ];
  var row1 = new Flip("row", imgarr);
  row1.createElement();
  console.log(row1, "www");
}
function flipRow2() {
  now += 1;
}
function flipCol1() {}
function flipCol2() {}

window.onload = function () {
  console.log(123);
  flipRow1();
};
