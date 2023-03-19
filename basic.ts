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
