<!--
 * Copyright (c) 2023 by onepisYa pis1@qq.com, All Rights Reserved. 
 * @Date: 2023-01-10 10:53:31
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2023-01-10 14:28:03
 * @FilePath: /vue3_vite_js_playground/src/components/HelloWorld.vue
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description: 
-->
<script setup>
import { computed, ref } from 'vue';
import { refDebounced, useDebounceFn, computedAsync } from '@vueuse/core'

defineProps({
  msg: String,
});
const foo = ref(2);
// 方法一 使用 vueuse 的 两个工具函数辅助完成。
const evaluating = ref(false)
const double_foo = computedAsync(
  async () => {
    // 依赖收集仅仅在 此函数最外层收集。
    const result = foo.value
    const debouncedFn = useDebounceFn(() => {
      return result * 2
    }, 2000)
    return debouncedFn()
  },
  null,
  { lazy: false, evaluating },
)

// 方法二
const bar = ref(2)
const debounced = refDebounced(bar, 1000)
const double_bar = computed(() => {
  return debounced.value * 2
})

</script>

<template>
  <h1>{{ msg }}</h1>
  <div class="card">
    <div>evaluating: {{ evaluating }}</div>
    <button type="button" @click="foo++">
      foo is {{ foo }}
    </button>
    <div>commputed_double foo {{ double_foo }}</div>
  </div>


  <div class="card">
    <button type="button" @click="bar++">
      bar is {{ bar }}
    </button>
    <div>commputed_double bar{{ double_bar }}</div>
  </div>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
