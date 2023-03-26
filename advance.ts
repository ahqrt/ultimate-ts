interface GenericIdentityFn<Type> {
  (arg: Type): Type;
}

function identity<Type>(arg: Type): Type {
  return arg;
}

let myIdentity: GenericIdentityFn<number> = identity;

interface MyType {
  name: string;
  age: number;
  sex: number;
}

function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}

let x: MyType = { name: "zhangsan", age: 10, sex: 1 };

// type Predicate = (x: unknown) => boolean;
// let s: typeof getProperty;

type CbFn = () => boolean;

const msgBox = (args: any) => true;
const msgBox2 = (args: any) => false;

let shouldContinue: typeof msgBox;

function callBack(callback: CbFn) {
}

function returnStr() {
  return "213";
}

// callBack(returnStr);

const MyArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
];

type Person = typeof MyArray[number];

type Example<T> = T extends string ? boolean : number;

type Bool = Example<Symbol>;

type IdLabel = number;
type NameLabel = string;

type NameOrId<T extends string | number> = T extends string ? NameLabel
  : IdLabel;

function createLabel<T extends string | number>(nameOrId: T): NameOrId<T>;
function createLabel(nameOrId: any): any {
  if (typeof nameOrId === "string") {
    return "11";
  } else {
    return 1;
  }
}

console.log(createLabel("123"));

// function returnSomething(): unknown {
//   return [];
// }

// let result = returnSomething();

// // result += 1;
// // [].push(result);

// result.push("123");

// console.log(result);

type Flatten<Type> = Type extends Array<infer Item> ? Item : Type;

type FB = Flatten<Array<string>>;

type MyReturnType<T> = T extends (...args: any) => infer U ? U : never;

type str = MyReturnType<() => string>;
type st1r = MyReturnType<() => number>;
type st11r = MyReturnType<() => number | string>;

type FeatureFlags = {
  darkMode: () => void;
  newUserProfile: () => void;
};

type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

type FeatureOptions = OptionsFlags<FeatureFlags>;
