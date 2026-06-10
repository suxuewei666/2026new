// 1.继承(扩展方式不同)
interface A {
  x: number;
}

interface B extends A {
  y: number;
}

const obj: B = { x: 1, y: 2 };

type A1 = { x: number };
type B1 = A1 & { y: number };//交叉类型

const obj1: B1 = { x: 1, y: 2 };

// 2.联合类型
type C = 'a' | 'b' | 'c'; // interface 做不到

// 3.声明合并
interface Person {
  name: string;
}

interface Person {
  age: number;
}

const p: Person = { name: 'Alice', age: 18 }; // interface 合并成功

// type Person = { name: string };
// type Person = { age: number }; // ❌ 会报错，type 不允许重复定义-不支持声明合并

// 4.实现类
interface Animal {
  name: string;
  speak(): void;
}

class Dog implements Animal {
  name = 'dog';
  speak() {
    console.log('wang');
  }
}

// type 也可以实现，只要是对象类型
type CatType = {
  name: string,
  speak(): void
};

class Cat implements CatType {
  name = 'cat';
  speak() {
    console.log('miao');
  }
}

// 使用建议

// 1.对象类型或类实现 → 优先 interface

// 便于声明合并、扩展、类实现

// 2.复杂类型、联合类型、交叉类型、元组类型、原始类型别名 → 使用 type

// type StringOrNumber = string | number

// 3.两者可以互换的场景

// 简单对象类型可以用 interface 或 type 都行

// 如果项目规范统一某一种，保持一致性即可


// 一句总结：
// interface 侧重“可扩展的对象结构”，支持声明合并；type 是“类型别名”，更灵活，支持联合/交叉/条件/映射等高级类型操作。实际开发中：结构用 interface，组合与变换用 type。


// interface支持extends拓展和声明合并,type支持交叉联合类型和类型别名，interface更适合定义对象结构，type更适合定义复杂类型。