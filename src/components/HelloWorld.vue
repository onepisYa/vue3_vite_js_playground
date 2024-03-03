<script setup>
import {
  ref,
  reactive,
  watchEffect,
  onRenderTracked,
  onRenderTriggered,toRaw
} from 'vue';

defineProps({
  msg: String,
});

const state = reactive(
[4, 5, 6]
);

const foo = ref([1, 2, 3]);
console.log(state);

const raw_push = ()=>{
  // console.log((toRaw(state)));
  // console.log(state);
// console.dir();
// console.log(((toRaw(state)).push).apply)
((toRaw(state)).push).apply(state, [10])
}

watchEffect(
  () => {
    console.log("watchEffect", state + foo.value);
  },
  {
    // 这两个函数的含义是  
    // track 在于跟踪，依赖收集，看看哪些是响应式的。
    onTrack(e) {
      console.log("onTrack", e);
      debugger;
      // 在 浏览器中 会在这里 停一下
      // 然后我我们可以在 这里 看一下 e
      // 这个 e 实际上就是 state.count
    },
    // trigger 在于跟踪，是什么响应式的数据发生变化，导致触发了 watchEffect 的 回调函数。
    onTrigger(e) {
      console.log("onTrigger", e);
      // 这个 e 里面可以看到 很多东西，比如 old 和 new 的值。以及 effect 和 一些其他信息。
      debugger;
      // 当我们更新 属性值的时候 则会在 这里停下
      // 这样你就 可以真的追踪你的 watcher 是如何工作的了
      // 甚至是 组件是 如何 渲染的
    },
  }
);

// 我们可以在 这里 调试查看 一些信息
//  响应式调试 ？
// 这个是 setup 中的使用方法，在选项式中，可以直接  renderTracked 和 renderTriggered 使用这两个选项就可以了。
// 这两个 render 钩子的含义在于跟踪组件是如何被重新渲染的，是什么数据的变化导致的重渲染。
onRenderTracked((e) => {
  console.log("Tracked", e);
  debugger;
});

onRenderTriggered((e) => {
  console.log("Triggered", e);
  debugger;
});

</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <ul class="card">
      <li class="li" v-for="item in state" :key="item">{{ item }}</li>
      <li class="li" v-for="item in foo" :key="item">{{ item }}</li>
    </ul>
    <button type="button" @click="state.push(10)">reactivity push 10 </button>
    <button type="button" @click="raw_push">raw push 10 </button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
    starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.li {
  border: #dbdbdb solid 1px;
  list-style: none;
}
</style>
