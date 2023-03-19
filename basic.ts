/**
 * 身份证
 */
type ID = string;

const myId: string = "31841383812381238128";

function generateID(): ID {
  return "31841383812381238128";
}

const message = "Hello world";

console.log(message);

type Direction = "left" | "right" | "top" | "bottom";

let direction: Direction = "left";

const req = { url: "https://example.com", method: "GET" } as const;

console.log("aaa".repeat(10));

function padLeft(padding: number | string, input: string): string {
  return "";
}

padLeft.description = "padLeft";

console.log(padLeft.description);

function map<T, U>(first: T[], fn: (ipt: T, index: number) => U): U[] {
  return first.map(fn);
}

// function filter(arr: any[], fn: (arg: any) => any) {
//   return arr.filter(fn);
// }

function filter<T>(arr: T[], fn: (item: T, index: number) => unknown): T[] {
  return arr.filter(fn);
}

const parsed = map(["1", "2", "3"], (n, index) => parseInt(n));
console.log(parsed);

const item = filter(["1", "2", "3"], (n) => {
  return n;
});

console.log(item);

function combine<T, U>(arr1: T[], arr2: U[]) {
  // return arr1.concat(arr2);
  return [...arr1, ...arr2];
}

const arr = combine([1, 2, 3], ["hello"]);
console.log(arr);

function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;

function makeDate(mOrTimestamp: any, d?: any, y?: any): any {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}

function fn(x: string): string;
// Return type isn't right
function fn(x: number): boolean;
// This overload signature is not compatible with its implementation signature.

function fn(x: string | number): string | boolean {
  if (typeof x === "string") {
    return "opps";
  } else {
    return true;
  }
}

fn("hello");
fn(1);

function len(s: string): number;
function len<T>(arr: T[]): number;
function len<T>(arr: T[] | string): number;
function len(x: any) {
  return x.length;
}

len(""); // OK
len([0]); // OK
// However, we can’t invoke it with a value that might be a string or an array
let a = Math.random() > 0.5 ? "hello" : [0];

len(a);

// function safeParse(s: string): unknown {
//   return JSON.parse(s);
// }

function safeParse<T>(s: string): T {
  return JSON.parse(s);
}

interface RandomString {
  name: string;
}

// Need to be careful with 'obj'!
const someRandomString = { name: 12 };

const obj = safeParse<RandomString>(JSON.stringify(someRandomString));
console.log(obj.name);

// void  never

// function fail() {
//   console.log(123)
// }

function fail(): never {
  throw new Error("123");
}
