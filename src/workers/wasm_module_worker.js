/*
 * Copyright (c) 2024 by ${git_name_email} , All Rights Reserved. 
 * @Date: 2024-01-02 10:25:21
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-01-02 11:13:18
 * @FilePath: /vue3_vite_js_playground/src/workers/wasm_module_worker.js
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
// npm 包
// import * as onepisya_wasm_module from "@onepisya/rust-wasm-demo"
// 本地 包
// import * as local_onepisya_wasm_module from "@/local_modules/pkg/rust_wasm_demo.js"
// 在这里需要这样导入 
import('@/local_modules/pkg/rust_wasm_demo.js').then(wasm => {
  console.log("wasm", wasm);
  function callback(e) {
    console.log('Worker: Message received from main script');
    //  from this: myWorker.postMessage([first.value, second.value]);
    //  or from this: myWorker.postMessage({somekey:somevalue});
    const data = e.data;
    if (isNaN(data)) {
      postMessage('Please write a numbers');
      // main thread need `onmessage` to receive the result
    } else {
      const n = parseInt(data)
      const start = performance.now();
      const result = wasm.fibonacci(n)
      const end = performance.now();
      const time = end - start;
      console.log('Worker: Posting message back to main script');
      postMessage({time, result});
    }
  }
  // onmessage = callback
  self.addEventListener("message", callback)
})
