/**
 * 比较2个虚拟DOM
 * @param { Element } oldTree  旧虚拟DOM
 * @param { Element } newTree  新虚拟DOM
 * @return { object } 补丁
 */
function diff(oldTree, newTree, index = 0) {
  const patches = {}; //补丁
  //递归树的结果 放入 patches
  walk(oldTree, newTree, index, patches);
  return patches;
}
/**
 *
 * @param { Element } oldNode  旧虚拟DOM
 * @param { Element } newNode  新虚拟DOM
 * @param { int }     index    索引
 * @param { object }  patches  补丁对象
 */
function walk(oldNode, newNode, index, patches) {
  const curPatches = [];
  if (oldNode.type === newNode.type) {
    const attrs = diffAttr(oldNode.props, newNode.props);
    // 如果attr有值  新旧节点有改变 把改变的属性 添加到补丁数组中
    if (Object.keys(attrs).length > 0) {
      curPatches.push({ type: "ATTR", attrs });
    }
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
function diffAttr(oldAttrs, newAttrs) {
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
