function deepClone(obj, map = new WeakMap()) {
  if (obj === null || typeof obj !== 'object') return obj;

  // 防止循环引用
  console.log('当前对象:', map.has(obj));
  if (map.has(obj)) return map.get(obj);

  // 处理 Date
  if (obj instanceof Date) return new Date(obj);

  // 处理 RegExp
  if (obj instanceof RegExp) return new RegExp(obj);

  // 处理数组
  const clone = Array.isArray(obj) ? [] : {};
  // 记录当前对象的克隆结果，防止循环引用
  map.set(obj, clone); //向 Map 对象中添加一个新的键值对，如果键已存在，则更新其对应的值
  console.log('克隆对象:', map, obj);
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key], map);
    }
  }

  return clone;
}

const obj = {
  num: 123,
  str: 'abc',
  bool: true,
  nul: null,
  undef: undefined,
  date: new Date(),
  reg: /abc/gi,
  arr: [1, 2, { a: 3 }]
};

obj.self = obj; // 循环引用

const cloned = deepClone(obj);
console.log(cloned);
console.log(cloned.self === cloned);
console.log(cloned.date === obj.date);
