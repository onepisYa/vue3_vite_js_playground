<!--
 * Copyright (c) 2023 by ${git_name_email} , All Rights Reserved. 
 * @Date: 2023-12-31 18:59:23
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2023-12-31 19:26:34
 * @FilePath: /vue3_vite_js_playground/src/components/WasmGame.vue
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description: 
-->
<script setup>
import { ref, onMounted } from "vue";
// npm 包
import * as onepisya_wasm_module from "@onepisya/rust-wasm-demo"
// 本地 包
import * as local_onepisya_wasm_module from "@/local_modules/pkg/rust_wasm_demo.js"
// onepisya_wasm_module.greet("onepisya")  // alert
console.log(local_onepisya_wasm_module);
// console.log(onepisya_wasm_module);
const { Game } = local_onepisya_wasm_module;


// 记录上一帧的时间戳
let lastFrame = Date.now();
// 获取 canvas 元素
let canvas = null


const init = () => {

  canvas= document.getElementById("wasm-game-canvas");
  // 创建 Game 实例
  const game = Game.new();
  console.log("game", game);
  // 设置 canvas 尺寸为游戏尺寸
  canvas.width = game.width();
  canvas.height = game.height();

  // 为 canvas 添加点击事件监听器
  canvas.addEventListener("click", (event) => onClick(game, event));

  // 使用 requestAnimationFrame 启动游戏循环
  requestAnimationFrame(() => onFrame(game));
}

// 游戏循环的回调函数
function onFrame(game) {
  // 计算帧间隔时间
  const delta = Date.now() - lastFrame;
  lastFrame = Date.now();

  // 更新游戏状态
  game.tick(delta);

  // 渲染游戏画面
  game.render(canvas.getContext("2d"));

  // 使用递归调用 requestAnimationFrame，实现持续的游戏循环
  requestAnimationFrame(() => onFrame(game));
}

// 处理点击事件的回调函数
function onClick(game, event) {
  // 获取点击位置相对于 canvas 的坐标
  const rect = event.target.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width) * game.width();
  const y = ((event.clientY - rect.top) / rect.height) * game.height();

  // 将点击事件传递给游戏对象处理
  game.click(x, y);
}

onMounted(() => {
  init();
});

</script>

<template>
  <h1>WasmGame</h1>
  <p class="read-the-docs">a wasm sample snake game</p>
  <div class="game-box">
    <canvas id="wasm-game-canvas"></canvas>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}

.game-box {
  text-align: center;
  font-size: 18px;
  margin: 0;
}

#wasm-game-canvas {
  width: 320px;
  height: 320px;
  image-rendering: pixelated;
}

@media (min-width: 600px) {
  #canvas {
    width: 500px;
    height: 500px;
  }
}
</style>
