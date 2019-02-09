function flatten(arr) {
  return [].concat(...arr.map(_ => (Array.isArray(_) ? flatten(_) : _)));
}
class Group {
  constructor(list = []) {
    this.list = list;
  }
  // 将数据过滤整理 摊平
  get arr() {
    const arr = this.list.map((_, index) => {
      return _.boxList
        .filter(_ => _.checked === true)
        .map(_ => ({
          value: _.value,
          key: index
        }));
    });
    return flatten(arr);
  }
  get group() {
    const arr = this.list.map((_, index) => ({ id: index }));
    return arr;
  }

  get groupBy() {
    const groups = this.groups;
    const groupBy = this.arr.reduce((groups, item) => {
      groups[item.key] = [...(groups[item.key] || []), item];
      return groups;
    }, {});
    return groupBy;
  }
  get key() {
    if (!this.group.length) return null;
    return this.group[0].id;
  }

  render(key = this.key, index = 0, result = []) {
    if (key === null) return [];
    const bar = [];
    const data = this.arr.find(_ => _.key === key);
    const data2 = this.arr.filter(_ => _.key !== key);
    // console.log(data2);
    return [data, ...data2];
  }
  get num() {
    const arr = [];
    for (let i in this.groupBy) {
      arr.push(this.groupBy[i].length);
    }
    let num = 1;
    for (const item of arr) {
      num = num * item;
    }
    return num;
  }
}

const list = [
  {
    name: "规格名字1",
    val: "",
    boxList: [
      { value: "Apple", checked: true },
      { value: "Pear", checked: true }
    ]
  },
  {
    name: "规格名字2",
    boxList: [
      { value: "Orange", checked: true },
      { value: "Grape", checked: true }
    ],
    val: ""
  },
  {
    name: "规格名字3",
    boxList: [
      { value: "Banner", checked: true },
      { value: "Strawberry", checked: true }
    ],
    val: ""
  }
];

//const result = new Group(list);
// console.log(result.arr);
// console.log(result.groupBy);
// console.log(result.num);
// const foo = result.render();
// console.log(foo);

const a = ["apple", "orange", "banner"];
const b = ["apple", "orange", "Strawberry"];
const c = ["apple", "Grape", "banner"];
const d = ["apple", "Grape", "Strawberry"];
const e = ["Pear", "orange", "banner"];
const f = ["Pear", "orange", "Strawberry"];
const g = ["Pear", "Grape", "banner"];
const h = ["Pear", "Grape", "Strawberry"];

const arr = [["Apple", "Pear"], ["Orange", "Grape"], ["Banner", "Apple"]];

let results = [];
let result = [];

function doExchange(arr, index) {
  for (var i = 0; i < arr[index].length; i++) {
    result[index] = arr[index][i];
    if (index != arr.length - 1) {
      doExchange(arr, index + 1);
    } else {
      results.push(result.join(","));
    }
  }
}
console.log(results);
