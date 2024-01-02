<!--
 * Copyright (c) 2024 by ${git_name_email} , All Rights Reserved. 
 * @Date: 2024-01-02 00:48:23
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-01-02 11:31:13
 * @FilePath: /vue3_vite_js_playground/src/components/JsFib.vue
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description: 
-->
<script setup>
import {
  ref,
} from 'vue';
defineProps({
  n: Number,
});

const fibonacci = (n) => {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
const calculate = (n) => {

  reset()
  const start = performance.now();
  result.value = fibonacci(n);
  const end = performance.now();
  const time = end - start;
  it_take_ms.value = time
  console.log("calculated in " + time + " ms");
  console.log("result: " + result.value);
}
const reset = () => {
  result.value = null
  it_take_ms.value = null
}
const result = ref(null)
const it_take_ms = ref(null)

</script>
<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: "JsFib", components: {}, data() { return {} }, watch: {}, computed: {}, created() { }, mounted() { }, methods: {}
});
</script>
<template>
  <div class="read-the-docs">
    <p>fibonacci {{ n }} </p>
    <div>
      <p>Calculated in {{ it_take_ms ?? "null" }} ms</p>
      <p>{{ result ?? "null" }}</p>
    </div>
    <p>
      <button @click="calculate(n)">Vue raw js Calculate</button>
    </p>
  </div>
</template>
  
  
<style scoped>
.read-the-docs {
  color: #888;
}
</style>