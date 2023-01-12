/*
 * Copyright (c) 2023 by onepisYa pis1@qq.com, All Rights Reserved.
 * @Date: 2023-01-10 10:53:31
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2023-01-12 02:04:14
 * @FilePath: /vue3_vite_js_playground/vite.config.js
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import WindiCSS from "vite-plugin-windicss";
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), WindiCSS()],
});
