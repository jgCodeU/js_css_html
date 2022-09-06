// BigInt 是一种内置对象，它提供了一种方法来表示大于 2^53 - 1 的整数。这原本是 Javascript 中可以用 Number 表示的最大数字。BigInt 可以表示任意大的整数。

// 基本使用
// 定义一个BigInt：
// 1.在一个数字后面加上n来定义一个BigInt
// 2.使用BigInt()来定义一个BigInt
// const BigInt1 = 12345678987654321n
// console.log('BigInt1:', BigInt1) // BigInt1: 12345678987654321n

// const BigInt2 = BigInt(1234567654321)
// console.log('BigInt2:', BigInt2) // BigInt2: 1234567654321n

// const BigInt3 = BigInt("0x1fffffffffffff");
// console.log('BigInt3:', BigInt3) // 9007199254740991n

// const BigInt4 = BigInt("0b11111111111111111111111111111111111111111111111111111");
// console.log('BigInt4:', BigInt4) // 9007199254740991n
// console.log(typeof BigInt4) // 'bigint'

// 运算操作
const previousMaxSafe = BigInt(Number.MAX_SAFE_INTEGER);
console.log(previousMaxSafe); // 9007199254740991n
const maxPlusOne = previousMaxSafe + 1n;
console.log(maxPlusOne); // 9007199254740992n
const theFuture = previousMaxSafe + 2n;
console.log(theFuture); // 9007199254740993n
const multi = previousMaxSafe * 2n;
console.log(multi); // 18014398509481982n
const subtr = previousMaxSafe - 10n;
console.log(subtr); // 9007199254740981n
const mod = previousMaxSafe % 10n;
console.log(mod); // 1n
const bigN = 2n ** 54n; // x ** y ：返回 x 的 y 次幂
console.log(bigN); // 18014398509481984n
const minus = previousMaxSafe * -1n;
console.log(minus); // -9007199254740991n
const division = 90n / 10n;
console.log(division); // 9n
// 注意：以下操作符可以和 BigInt 一起使用： +、`*`、`-`、`**`、`%` 、`/`。除 >>> （无符号右移）之外的 位操作 也可以支持。
// BigInt 不支持单目 (+) 运算符。

// 比较
// BigInt 和 Number 不是严格相等的，但是宽松相等的。
console.log(0n === 0); // false
console.log(0n == 0); // true
// Number 和 BigInt 可以进行比较。
console.log(1n < 2); // true
console.log(2n > 1); // true
console.log(2 > 2); // false
console.log(2n > 2); // false
console.log(2n >= 2); // true
// 两者也可以混在一个数组内并排序。
const mixed = [4n, 6, -12n, 10, 4, 0, 0n];
mixed.sort();
console.log(mixed);
// [-12n, 0, 0n, 10, 4n, 4, 6]

// 条件：
// BigInt 在需要转换成 Boolean 的时表现跟 Number 类似
if (0n) {
  console.log("Hello from the if!");
} else {
  console.log("Hello from the else!");
}
// "Hello from the else!"
console.log(0n || 12n) // 12n
console.log(0n && 12n) // 0n
console.log(Boolean(0n)) // false
console.log(Boolean(12n)) // true
console.log(!12n) // false
console.log(!0n) // true

// 注意：
// 1.由于在 Number 与 BigInt 之间进行转换会损失精度，因而建议仅在值可能大于 2^53 时使用 BigInt 类型，并且不在两种类型之间进行相互转换。
// 2.对任何 BigInt 值使用 JSON.stringify() 都会引发 TypeError，因为默认情况下 BigInt 值不会在 JSON 中序列化。但是，如果需要，可以实现 toJSON 方法。
