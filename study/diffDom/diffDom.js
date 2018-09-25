class Diff {
  /**
   * 比较2个虚拟DOM
   * @param { Element } oldTree  旧虚拟DOM
   * @param { Element } newTree  新虚拟DOM
   */
  constructor(oldTree, newTree) {
    const patches = {}; //补丁集合
    this.index = 0;
    this.walk(oldTree, newTree, this.index, patches);
    this.patches = patches; //补丁集合
  }
  get ATTR() {
    return "ATTR";
  }
  get TEXT() {
    return "TEXT";
  }
  diffChildren(oldChildren, newChildren, patches) {
    oldChildren.forEach((child, idx) => {
      this.index += 1;
      this.walk(child, newChildren[idx], this.index, patches);
    });
  }
  /**
   *
   * @param { Element } oldNode  旧虚拟DOM
   * @param { Element } newNode  新虚拟DOM
   * @param { int }     index    索引
   * @param { object }  patches  补丁对象
   */
  walk(oldNode, newNode, index, patches) {
    const curPatches = [];
    // 判断2个节点是否为文本类型
    if (this.isString(oldNode) && this.isString(newNode)) {
      // 判断2个文本类型的文本是否一样
      if (oldNode !== newNode) {
        curPatches.push({ type: this.TEXT, text: newNode });
        patches[index] = curPatches;
      }
      return;
    }
    if (oldNode.type === newNode.type) {
      const attrs = this.diffAttr(oldNode.props, newNode.props);
      // 如果attr有值  新旧节点有改变 把改变的属性 添加到补丁数组中
      if (Object.keys(attrs).length > 0) {
        curPatches.push({ type: this.ATTR, attrs });
      }
      this.diffChildren(oldNode.children, newNode.children, patches);
      // 将元素和补丁对应起来放入大补丁包中
      curPatches.length && (patches[index] = curPatches);
    }
  }
  /**
   * 比较属性
   * @param { Element } oldNode  旧虚拟DOM
   * @param { Element } newNode  新虚拟DOM
   * @return { object } patch    补丁对象
   */
  diffAttr(oldAttrs, newAttrs) {
    const patch = {};
    for (const key in oldAttrs) {
      // 判断 oldAttrs 的属性是否有被改变
      // 若改变 则给patch记录这个属性
      oldAttrs[key] !== newAttrs[key] && (patch[key] = newAttrs[key]);
    }
    for (const key in newAttrs) {
      // 判断 newAttrs 的属性是否有添加
      // 若改变 则给patch记录这个属性
      !oldAttrs.hasOwnProperty(key) && (patch[key] = newAttrs[key]);
    }
    return patch;
  }

  isString(node) {
    return Object.prototype.toString.call(node) === "[object String]";
  }
}

console.log(Diff);
