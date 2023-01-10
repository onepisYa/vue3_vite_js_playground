<!--
 * Copyright (c) 2023 by onepisYa pis1@qq.com, All Rights Reserved. 
 * @Date: 2023-01-10 10:53:31
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2023-01-10 21:09:20
 * @FilePath: /vue3_vite_js_playground/src/components/HelloWorld.vue
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description: 
-->


<script setup>

import { ref } from 'vue'
import { count } from '../Demo/state'
import LazyDemo from '../Demo/LazyDemo.vue'
import EagerDemo from '../Demo/EagerDemo.vue'

defineProps({
  msg: String,
});


const lazyRenders = ref(0)
const eagerRenders = ref(0)
</script>

<template>
  <div grid grid-cols-2>
    <div>{{ msg }}</div>
    <div class="card">
      <span text-primary font-bold>Lazy Computed</span>
      <div font-mono>
        <LazyDemo @update="lazyRenders++" key="Lazy"/>
        <div>
          Renders: {{ lazyRenders }}
        </div>
      </div>
    </div>
    <div class="card">
      <span text-primary font-bold>Eager Computed</span>
      <div font-mono>
        <EagerDemo @update="eagerRenders++" key="Eager"/>
        <div>Renders: {{ eagerRenders }}</div>
      </div>
    </div>
  </div>

  <div class="card" mt-4 font-mono>
    Count: {{ count }}
  </div>
  <button secondary @click="count--">
    Decrement
  </button>
  <button @click="count++">
    Increment
  </button>
</template>
