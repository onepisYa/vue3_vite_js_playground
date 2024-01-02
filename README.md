# vue3_vite_js_playground

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/vitejs-vite-xgmbwj)

# rust-wasm-demo-use-exmple

copy from [Game = Rust + WebAssembly + 浏览器 (前端柒八九)](https://mp.weixin.qq.com/s/SP-X8WyAe3A0Bvm_lPLB3A) and [编译 Rust 为 WebAssembly](https://developer.mozilla.org/zh-CN/docs/WebAssembly/Rust_to_Wasm)

- [npm-rust-wasm-demo](https://www.npmjs.com/package/@onepisya/rust-wasm-demo)
- [example: use this package in vue 3 + vite](https://github.com/onepisYa/vue3_vite_js_playground/tree/test-rust-wasm-in-vue-vite)

# Components

- WasmAlert uses a greet function from wasm.
- WasmGame is a sample snake game.
- WasmFib is a wasm-based fibonacci number generator.
	- It runs in a web worker.
	- It displays the current calculating status.
- JsFib is a fibonacci number generator written in raw JavaScript.
	- It runs in the main thread.
	- It cannot display the calculating status because the main thread is blocked.
	- When the calculation is completed, the calculating status will be reset to false.
