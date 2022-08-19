function flipRow1() {
  var imgContainer = document.querySelector(".img-container");
  var imgsChild = document.querySelector(".img-container").children;
  var rowLen = imgsChild.length ? imgsChild.length : 0;
  var rowImgs = {};

  for (let i = 0; i < imgsChild.length; i++) {
    let node = imgsChild[i];
    rowImgs[`arr${i}`] = [];
    for (let j = 0; j < node.children.length; j++) {
      let cnode = node.children[j];
      rowImgs[`arr${i}`].push(cnode.src);
    }
  }
  console.log(rowImgs, "rowimgs");

  var imgarr = [
    "./imgline/p1-1.png",
    "./imgline/p1-1.png",
    "./imgline/p1-2.png",
    "./imgline/p2-1.png",
    "./imgline/p2-2.png",
    "./imgline/p2-2.png",
  ];

  var imgarr1 = [
    "./imgline/p2-4.png",
    "./imgline/p2-4.png",
    "./imgline/p2-3.png",
    "./imgline/p3-4.png",
    "./imgline/p3-3.png",
    "./imgline/p3-3.png",
  ];

  var imgarr2 = [
    "./imgline/p3-2.png",
    "./imgline/p3-2.png",
    "./imgline/p3-1.png",
    "./imgline/p4-2.png",
    "./imgline/p4-1.png",
    "./imgline/p4-1.png",
  ];

  var imgarr3 = [
    "./imgline/p5-3.png",
    "./imgline/p5-4.png",
    "./imgline/p5-3.png",
    "./imgline/p4-4.png",
    "./imgline/p4-3.png",
    "./imgline/p4-3.png",
  ];

  var bookConf = {
    type: "row-up",
    imgs: imgarr,
    bookClassName: "book",
  };

  var book1Conf = {
    type: "col-up",
    imgs: imgarr1,
    bookClassName: "book1 book-hide",
    flipClassName: "flip1",
  };

  var book2Conf = {
    type: "row-down",
    imgs: imgarr2,
    bookClassName: "book2 book-hide",
    flipClassName: "flip2",
  };

  var book3Conf = {
    type: "col-down",
    imgs: imgarr3,
    bookClassName: "book3 book-hide",
    flipClassName: "flip3",
    current: 1,
  };

  var row = new Flip(bookConf);
  var row1 = new Flip(book1Conf);
  var row2 = new Flip(book2Conf);
  var row3 = new Flip(book3Conf);

  row.initBook();
  row1.initBook();
  row2.initBook();
  row3.initBook();
}

function flipRow2() {
  now += 1;
}
function flipCol1() {}
function flipCol2() {}

function baseClick() {
  var base = document.querySelector(".base");
  var base1 = document.querySelector(".base1");
  var base2 = document.querySelector(".base2");
  var base3 = document.querySelector(".base3");
  var base4 = document.querySelector(".base4");

  var book = document.querySelector(".book");
  var book1 = document.querySelector(".book1");
  var book2 = document.querySelector(".book2");
  var book3 = document.querySelector(".book3");

  base.addEventListener("click", function () {
    var el = this;
    el.classList.add("base-hide");
    book.click();
    setTimeout(() => {
      book.classList.add("book-hide");
      base1.classList.remove("base-hide");
      book1.classList.remove("book-hide");
    }, 2000);
  });

  base1.addEventListener("click", function () {
    var el = this;
    el.classList.add("base-hide");
    book1.click();
    console.log("base1 click");
    setTimeout(() => {
      book1.classList.add("book-hide");
      base2.classList.remove("base-hide");
      book2.classList.remove("book-hide");
    }, 2000);
  });

  base2.addEventListener("click", function () {
    var el = this;
    el.classList.add("base-hide");
    book2.click();
    setTimeout(() => {
      book2.classList.add("book-hide");
      base3.classList.remove("base-hide");
      book3.classList.remove("book-hide");
    }, 2000);
  });

  base3.addEventListener("click", function () {
    var el = this;
    el.classList.add("base-hide");
    book3.click();
    setTimeout(() => {
      book3.classList.add("book-hide");
      base4.classList.remove("base-hide");
    }, 2000);
  });
}
window.onload = function () {
  flipRow1();
  baseClick();
};
