class Element {
  constructor(type, props, children) {
    this.type = type;
    this.props = props;
    this.children = children;
  }
  static createElement(type, props, children) {
    return new this(type, props, children);
  }
  static setAttr(node, key, val) {
    switch (key) {
      case "value": //node 是一个Input 或者 Textarea
        if (
          node.tagName.toUpperCase() === "INPUT" ||
          node.tagName.toUpperCase() === "TEXTAREA"
        ) {
          node.value = val;
        } else {
          node.setAttribute(key, val);
        }
        break;
      case "style":
        node.style.cssText = val;
        break;
      default:
        node.setAttribute(key, val);
        break;
    }
  }
  static render(vNode) {
    let el = document.createElement(vNode.type);
    for (const key in vNode.props) {
      this.setAttr(el, key, vNode.props[key]);
    }
    vNode.children.forEach(child => {
      child =
        child instanceof Element
          ? this.render(child)
          : document.createTextNode(child);
      el.appendChild(child);
    });
    return el;
  }
}
const vertualDom = Element.createElement("ul", { class: "ul-warper" }, [
  Element.createElement("li", { class: "li-warper", style: "color:red" }, [
    Element.createElement("p", {}, ["a"]),
    Element.createElement("p", {}, ["b"])
  ]),
  Element.createElement("li", { class: "li-warper" }, ["2"])
]);
console.log(vertualDom);
const dom = Element.render(vertualDom);
console.log(dom);
const app = document.getElementById("app");
app.appendChild(dom);
/**
 * dom diff
 * 1. js对象 模拟 vertualDom
 * 2. 把vertualDom 转成 真是DOM
 * 3. 如果有时间发生修改了 vertualDom 比较2个vertualDom 的差异 得到 差异对象
 * 4. 把差异对象应用到真是DOM树上
 */
