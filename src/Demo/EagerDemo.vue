<!--
 * Copyright (c) 2023 by onepisYa pis1@qq.com, All Rights Reserved. 
 * @Date: 2023-01-10 20:46:44
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2023-01-10 22:59:33
 * @FilePath: /vue3_vite_js_playground/src/Demo/EagerDemo.vue
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description: 
-->
<script setup>
import { onUpdated } from 'vue'
import { computedEager } from '@vueuse/core'
import { count } from './state'
import { resolveRef } from '@vueuse/shared'
const emit = defineEmits(['update'])
onUpdated(() => emit('update'))
/*
  computedEager 为什么在返回值 没有改变的情况下，不会 re-render 因为，它不是
    惰性求值，意思就是，每次依赖 dependency 改变的时候，他就马上 重新计算了这个 computed
    而 computed 是惰性求值的，仅仅在 模板中，或者在其他地方用到它，也就是需要它的时候，
    才会去调用这个函数进行求值的 计算。
    所以我们在 渲染之前就已经知道了  computedEager 的值是多少。
    这个时候，发现 返回值没有改变，所以我们不用 re-render 重渲染。
*/
/*
  简单实现的 watchEffect 包装就可以实现这个 computedEager ，仅仅需要立即求值就可以了。

  // ported from https://dev.to/linusborg/vue-when-a-computed-property-can-be-the-wrong-tool-195j
  // by @linusborg https://github.com/LinusBorg

  import type { Ref, WatchOptionsBase } from 'vue-demi'
  import { readonly, shallowRef, watchEffect } from 'vue-demi'

  export function computedEager<T>(fn: () => T, options?: WatchOptionsBase): Readonly<Ref<T>> {
    const result = shallowRef()

    watchEffect(() => {
      result.value = fn()
    }, {
      ...options,
      flush: options?.flush ?? 'sync',
    })

    return readonly(result)
  }

  // alias
  export { computedEager as eagerComputed }
*/

/*
// watchEffect 定义。
  function watchEffect(
    effect: (onCleanup: OnCleanup) => void,
    options?: WatchEffectOptions
  ): StopHandle

  type OnCleanup = (cleanupFn: () => void) => void

  interface WatchEffectOptions {
    flush?: 'pre' | 'post' | 'sync' // default: 'pre'
    onTrack?: (event: DebuggerEvent) => void
    onTrigger?: (event: DebuggerEvent) => void
  }
  // flush 选项 是为了 处理 watcher 的回调函数 和 vue 组件更新的顺序。
  //- post 将 回调函数 推迟到 组件更新之后
  //- pre 是默认行为，回调函数在 组件更新之前 运行。
  //- sync 是 当 依赖改变后，立即触发 watcher 的回调函数。
  type StopHandle = () => void
*/

const isOver10 = computedEager(() => count.value > 5)
</script>

<template>
  <div>
    Is over 5: {{ isOver10 }}
  </div>
</template>
