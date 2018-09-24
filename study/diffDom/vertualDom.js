class Element {
  /**
   * @param { string } type 标签类型
   * @param { object } props dom 属性
   * @param { array } children 子元素
   */
  constructor(type, props, children) {
    this.type = type;
    this.props = props;
    this.children = children;
  }
  // 创建虚拟DOM
  static createElement(type, props, children) {
    return new this(type, props, children);
  }
  /**
   * 给虚拟DOM 创建属性
   * @param { DomElement } node
   * @param { string } key
   * @param { string } val
   */
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
  // 将虚拟DOM 渲染为真是DOM
  /**
   *
   * @param { Element } vNode Element 的实例 虚拟DOM
   * @return { DomElement } el 真实DOM
   */
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

/**
 * dom diff
 * 1. js对象 模拟 vertualDom
 * 2. 把vertualDom 转成 真是DOM
 * 3. 如果有时间发生修改了vertualDom比较2个vertualDom的
 *    差异得到差异对象
 * 4. 把差异对象应用到真是DOM树上
 */
