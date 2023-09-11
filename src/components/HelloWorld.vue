<!--
 * Copyright (c) 2023 by onepisYa pis1@qq.com, All Rights Reserved. 
 * @Date: 2023-01-10 10:53:31
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2023-09-11 17:08:21
 * @FilePath: /vue3_vite_js_playground/src/components/HelloWorld.vue
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description: 
-->
<script setup>
import { ref } from '@vue/reactivity'
import { useGesture } from '@vueuse/gesture'
import { useDrag } from '@vueuse/gesture'
import { useMotionProperties, useSpring } from '@vueuse/motion'


// 更多的 demo 可以查看 vueuse-gesture 的源代码
// https://github.com/vueuse/gesture/blob/main/docs/.vitepress/components/demos

defineProps({
  msg: String,
});

// --------- untils ----------
const genHandler =   ( set) => {
  return ({ movement: [x, y], dragging })=>{
    if (!dragging) {
      set({ x: 0, y: 0, cursor: 'grab' })
      return
    }
    set({
      cursor: 'grabbing',
      x,
      y,
    })
  }

}

// ------------- state -------------
const card = ref();
const card_one = ref();

const { motionProperties} = useMotionProperties(card, {
  cursor: 'grab',
  x: 0,
  y: 0,
})

const { motionProperties: card_one_motionProperties } = useMotionProperties(card_one, {
  cursor: 'grab',
  x: 0,
  y: 0,
})

// --------- logic ---------

const { set } = useSpring(motionProperties)
// @ts-ignore
const { set:card_one_set } = useSpring( card_one_motionProperties )

useDrag(  genHandler(set), { domTarget: card, })
const dragHandler =  genHandler(card_one_set)

</script>

<template>
  <h1>{{ msg }}</h1>
  <div ref="card_one" v-drag="dragHandler" class="card">
    onepisya
  </div>

  <div ref="card" class="card">
    Hello World!
  </div>

</template>

<style scoped>
</style>
