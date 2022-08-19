/**
 * config: {
 *    type: '',
 *    imgs: [],
 * }
 * type 需要载入的模式
 * [row-up(竖版上至下) row-down(竖版下至上) col-left(横版左至右) col-right(横版右至左)]
 * imgs 有序图片数组 根据顺序生成出所需要的组合图片元素
 * current 当前所在页数的值
 */
class Flip {
  constructor(config) {
    this.type = config.type;
    this.imgs = config.imgs; // 有序的图片数组
    this.bookClassName = config.bookClassName; // book 类名
    this.flipClassName = config.flipClassName ? config.flipClassName : "flip"; // flip 类名
    this.flipCurrent = config.current ? config.current : 0;
    this.current = 1; // 当前值
    this.book = "";
  }

  /**
   * 初始化 book
   */
  initBook() {
    this.createElement();
    this.initClickEvent();
  }

  /**
   * 动态设置属性值
   * @param {*} el 原元素
   * @param {*} options 属性配置
   * @returns 带属性 新元素
   */
  setAttr(el, options) {
    Object.keys(options).forEach((key) => {
      el.setAttribute(key, options[key]);
    });
    return el;
  }
  /**
   * 自定义生成 div
   * @param {class} options 属性值 配置 {class: ''}
   * @returns
   */
  cDiv(options) {
    let tdiv = document.createElement("div");
    return this.setAttr(tdiv, options);
  }
  /**
   * 自定义生成 img
   * @param {src, class} options 属性值 配置 {src: ''}
   * @returns
   */
  cImg(options) {
    let tImg = document.createElement("img");
    return this.setAttr(tImg, options);
  }

  /**
   * 创建 papers 元素
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
      }
      if (current >= i) {
        tpapers.classList.add(flip);
      }
      tpapers.appendChild(pages[i * 2]);
      tpapers.appendChild(pages[i * 2 + 1]);
      papers.push(tpapers);
    }
    // console.log(papers, "papers");
    return papers;
  }
  /**
   * 创建 page 元素
   * @returns
   */
  createPage() {
    let pages = [];

    if (!this.imgs.length) return console.log("缺少传入图片集"); // 判断是否传入图片

    for (let i = 0; i < this.imgs.length; i++) {
      const url = this.imgs[i];
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
    // console.log(pages, "pages");
    return pages;
  }

  /**
   * 创建 book 元素
   */
  createElement() {
    var book = this.cDiv({ class: this.bookClassName });
    let pages = this.createPage();
    let papers = this.createPapers(pages, this.flipCurrent, this.flipClassName);
    papers.forEach((el) => book.appendChild(el));
    document.querySelector(".book-container").appendChild(book);
    this.book = book;
  }

  /**
   * 创建 book click 事件
   */
  initClickEvent() {
    this.book.addEventListener("click", () => {
      var papers = this.book.querySelectorAll(".paper");
      var curentPapper = papers[this.current];
      // console.log(papers, curentPapper, this.current, "my paper");
      curentPapper.classList.add("current");
      if (this.type === "col-down") {
        curentPapper.classList.remove(this.flipClassName);
      } else {
        curentPapper.classList.add(this.flipClassName);
      }

      Array.from(papers).forEach((paper, index) => {
        if (index !== this.current) {
          paper.classList.remove("current");
        }
      });

      if (this.type === "col-down") {
        this.current -= 1;
      } else {
        this.current += 1;
      }
    });
  }
}
