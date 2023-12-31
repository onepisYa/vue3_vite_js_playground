<!--
 * Copyright (c) 2023 by ${git_name_email} , All Rights Reserved. 
 * @Date: 2023-12-31 16:58:52
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2023-12-31 18:58:37
 * @FilePath: /vue3_vite_js_playground/src/components/WasmAlert.vue
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description: 
-->
<script setup>
// npm 包
import * as onepisya_wasm_module from "@onepisya/rust-wasm-demo"
// 本地 包
import * as local_onepisya_wasm_module from "@/local_modules/pkg/rust_wasm_demo.js"
// onepisya_wasm_module.greet("onepisya")
local_onepisya_wasm_module.greet("onepisYa")
console.log(local_onepisya_wasm_module);
// console.log(onepisya_wasm_module);

</script>

<template>
 <p class="read-the-docs">WasmAlert</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}

</style>
