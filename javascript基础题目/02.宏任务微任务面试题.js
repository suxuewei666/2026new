// 同步代码 → 微任务 → 宏任务

// 微任务包括：

// Promise 的 .then()、.catch()、.finally()

// queueMicrotask()

// MutationObserver

// 宏任务包括：

// setTimeout、setInterval

// I/O 操作

// UI 渲染

setImmediate (Node.js)
// console.log("script start");
// let promise1 = new Promise(function (resolve) {
// 	console.log("promise1");
// 	resolve("resolve!"); // 注意这里
// 	console.log("promise1 end");
// }).then(function (res) {
// 	console.log("promise2");
// 	console.log(res); // 注意这里
// });
// setTimeout(function () {
// 	console.log("settimeout");
// });
// console.log("script end");


console.log("start");

setTimeout(() => {
	console.log("1");

	new Promise((resolve) => {
		console.log("2");//同步任务

		resolve();
	}).then(() => {
		console.log("3");//微任务
	});

	new Promise((ressolve, reject) => {
		console.log("middle");
		reject();
	})
		.then(() => {
			console.log(4);  // 注意这里！！
		})
		.catch(() => {
			console.log("5");
			setTimeout(() => {
				console.log("6");
			});
		});
});

console.log("end");

// start
// end
// 1
// 2
// middle
// 3
// 5
// 6