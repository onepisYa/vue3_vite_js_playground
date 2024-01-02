<!--
 * Copyright (c) 2024 by ${git_name_email} , All Rights Reserved. 
 * @Date: 2024-01-02 01:17:14
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-01-02 11:30:29
 * @FilePath: /vue3_vite_js_playground/src/components/WasmFib.vue
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description: 
-->
<script setup>
import {
  ref,
  nextTick
} from 'vue';
import wasm_module_worker_js_url from "@/workers/wasm_module_worker.js?url"
console.log(wasm_module_worker_js_url);

defineProps({
  n: Number,
});
const fibworker = new Worker(wasm_module_worker_js_url)
fibworker.addEventListener("message", (e) => {
  const message = e.data;
  console.log("message", message);
  result.value = message.result
  it_take_ms.value = message.time
  in_calculating.value = false
})

const in_calculating = ref(false)

const calculate = async (n) => {

  if (!in_calculating.value) {
    console.log("in_calculate", in_calculating.value);
    calculate_reset()
    fibworker.postMessage(n)
  } else {
    console.log("in_calculate", in_calculating.value);
  }
}

const calculate_reset = async () => {
  result.value = null
  it_take_ms.value = null
  in_calculating.value = true
}

const result = ref(null)
const it_take_ms = ref(null)

</script>
<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: "WasmFib", components: {}, data() { return {} }, watch: {}, computed: {}, created() { }, mounted() { }, methods: {}
});
</script>
<template>
  <div class="read-the-docs">
    <p>fibonacci {{ n }} </p>
    {{ in_calculating }}
    <div v-if="!in_calculating">
      <p>Calculated in {{ it_take_ms ?? "null" }} ms</p>
      <p>{{ result ?? "null" }}</p>
    </div>
    <p v-else>calculating...</p>
    <p>
      <button @click="calculate(n)">Vue wasm Calculate</button>
    </p>
    <p style="text-align: left;">
      <li>computation-intensive task</li>
      <li>WasmFib is a wasm-based fibonacci number generator.</li>
      <li>It runs in a web worker.</li>
      <li>It displays the current calculating status.</li>
    </p>
  </div>
</template>
  
  
<style scoped>
.read-the-docs {
  color: #888;
}
</style>