class Flip {
  constructor(type, imgArr) {
    this.type = type; // 需要载入的模式
    this.imgArr = imgArr; // 有序的图片数组
    this.current = 1; // 当前值
  }

  getImgList() {
    console.log(this.imgArr, "imgArr");
  }

  flipStyle() {
    this.current++;
  }

  flipRow1() {}
  flipRow2() {}
  flipCol1() {}
  flipCol2() {}

  cDiv(options) {
    let tdiv = document.createElement("div");
    options.class ? tdiv.setAttribute("class", options.class) : null;
    return tdiv;
  }
  cImg(options) {
    let tImg = document.createElement("img");
    options.src
      ? tImg.setAttribute("src", options.src)
      : console.log("存在图片获取失败");

    options.class ? tImg.setAttribute("src", options.class) : null;
    return tImg;
  }
  /**
   *
   * @param {*} pages 子页 已加载图片
   * @param {*} current 自定义当前翻页状态，默认0
   * @param {String} flip 自定义 flip 的class类名 默认 'flip'
   * @returns
   */
  createPapers(pages, current = 0, flip = "flip") {
    let papers = [];
    for (let i = 0; i < 3; i++) {
      let tpapers = this.cDiv({ class: "paper" });
      if (current === i) {
        tpapers.classList.add("current");
        tpapers.classList.add(flip);
      }
      tpapers.appendChild(pages[i * 2]);
      tpapers.appendChild(pages[i * 2 + 1]);
      papers.push(tpapers);
    }
    console.log(papers, "papers");
    return papers;
  }
  createPage() {
    console.log(this.imgArr);
    let pages = [];

    if (!this.imgArr.length) return console.log("缺少传入图片集"); // 判断是否传入图片

    for (let i = 0; i < this.imgArr.length; i++) {
      const url = this.imgArr[i];
      const cImg = this.cImg({ src: url });
      if (i % 2 === 0) {
        let front = this.cDiv({ class: "page front" });
        front.appendChild(cImg);
        pages.push(front);
      } else {
        let back = this.cDiv({ class: "page back" });
        back.appendChild(cImg);
        pages.push(back);
      }
    }
    console.log(pages, "pages");
    return pages;
  }
  createElement() {
    var book = this.cDiv({ class: "book" });
    let pages = this.createPage();
    let papers = this.createPapers(pages);
    papers.forEach((el) => book.appendChild(el));
    document.body.appendChild(book);
  }
}
