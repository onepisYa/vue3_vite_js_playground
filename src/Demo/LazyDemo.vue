<!--
 * Copyright (c) 2023 by onepisYa pis1@qq.com, All Rights Reserved. 
 * @Date: 2023-01-10 20:49:13
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2023-01-10 21:21:05
 * @FilePath: /vue3_vite_js_playground/src/Demo/LazyDemo.vue
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description: 
-->
<script setup>
import { computed, onUpdated } from 'vue'
import { count } from './state'

const emit = defineEmits(['update'])
onUpdated(() => emit('update'))

const isOver10 = computed(() => count.value > 5)
/* 
  computed 有两个特性
  1. 同步的，缓存的，意思就是 多次读取computed 的值的时候，
    如果 收集的 dependency 没有改变，那么直接返回 缓存的值。
  2. 惰性求值，意思就是，computed 里面的值，仅仅会在 模板里面应用的那一瞬间
    才会调用 getter 函数，去获取值，因为我们的 getter 函数中是 进行计算的，
    所以计算发生在模板中调用它的时候。
    当 dependency 改变的时候， computed 被标记为 dirty ，同理因为惰性求值，
    所以 dependency 改变后， computed 的值是多少，我们和vue 都不知道。
    这也就是为什么，computed 依赖改变后，返回值不变，
    但是 该组件依然会 re-render 的原因。
*/

</script>

<template>
  <div>
    Is over 5: {{ isOver10 }}
  </div>
</template>
