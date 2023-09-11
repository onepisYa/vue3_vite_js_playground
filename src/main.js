/*
 * Copyright (c) 2023 by onepisYa pis1@qq.com , All Rights Reserved. 
 * @Date: 2023-09-11 14:37:35
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2023-09-11 15:00:36
 * @FilePath: /vue3_vite_js_playground/src/main.js
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description: 
 */
import { createApp } from 'vue'
import { GesturePlugin } from '@vueuse/gesture'
import { MotionPlugin } from '@vueuse/motion'

import './style.css'
import App from './App.vue'

const app = createApp(App)
app.use(GesturePlugin)
app.use(MotionPlugin)
app.mount('#app')
