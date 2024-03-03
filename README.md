<!--
 * Copyright (c) 2024 by ${git_name_email} , All Rights Reserved. 
 * @Date: 2024-03-03 18:26:38
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-03-03 22:32:00
 * @FilePath: /vue3_vite_js_playground/README.md
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
-->
# vue3_vite_js_playground

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/vitejs-vite-xgmbwj)

这个主要想要测试的是数组数组每次 push 或者进行其他操作的时候会整个遍历然后调用 get trap。
- 它们完全遍历数组，而不是访问特定的随机索引。
- 对于这种用法，数组被完全读取（例如使用 for-of ， map ， filter ， sort ， v-for ），数组中的所有内容都是依赖项。
- 相反，一个天真的方法跟踪每一个单一的索引访问。
- 请注意，Vue实际上已经为集合（不包括数组）的 keys 、 values 、 entries 、 @@Iterator 和 forEach 执行了这种优化
- 


---


- https://github.com/vuejs/core/pull/9511 替身数组 tracking 的性能
  - https://github.com/vuejs/core/issues/4318 更详细的相关问题解释
  - 重点可以放在 https://github.com/vuejs/core/pull/9511/files 上、这相当于一个过滤列表、会忽略掉它。通过包装重写了几乎所有的数组操作、确保这些函数合理的绕过 get trap。
    - packages/reactivity/src/arrayInstrumentations.ts
      - 注意 reactiveReadArray 
      - 注意 arrayInstrumentations  包装的方法在这里面
      - 注意 noTracking 方法、以及 Iterator 的实现
        - 也就是 set trap 另外用了一个专门的 key ARRAY_ITERATE_KEY 来进行过滤
        - 并且调用 pauseTracking 来暂停跟踪、最后 resetTracking
          - 具体代码在后面
        - `调用 track(raw, TrackOpTypes.ITERATE, ARRAY_ITERATE_KEY)`
        - 在 track 和 trigger 上做文章、避免 length 被 track（因为会先访问 length）
        - `((toRaw(state)).push).apply(state, [10])` 类似这样的方式去调用 push 
    - packages/reactivity/src/dep.ts
      - （原来就有判断 length 和 newLength）在 trigger 的时候仅仅调用 length 以及 `ARRAY_ITERATE_KEY` 对应的 dep.trigger
        - 仅仅添加了条件 ARRAY_ITERATE_KEY
        - 在 trigger 方法中`(!isSymbol(key) && key >= newLength)`  也是一个过滤条件
        - depsMap 是一个 Map、然后 key 是一个对象、 value 是 Dep 对象
    - packages/runtime-core/src/helpers/renderList.ts
    - 通过 BaseHandler 注册到 get 中的(在 get 中使用 arrayInstrumentations) 
    - 下方是 reactive 的实现

```ts
export function reactive<T extends object>(target: T): UnwrapNestedRefs<T>
export function reactive(target: object) {
  // if trying to observe a readonly proxy, return the readonly version.
  if (isReadonly(target)) {
    return target
  }
  return createReactiveObject(
    target,
    false,
    mutableHandlers,
    mutableCollectionHandlers,
    reactiveMap,
  )
  // return new Proxy(target, mutableCollectionHandlers || mutableHandlers)

}
```    

```ts
export let shouldTrack = true
export let pauseScheduleStack = 0

const trackStack: boolean[] = []

/**
 * Temporarily pauses tracking.
 */
export function pauseTracking() {
  trackStack.push(shouldTrack)
  shouldTrack = false
}

/**
 * Resets the previous global effect tracking state.
 */
export function resetTracking() {
  const last = trackStack.pop()
  shouldTrack = last === undefined ? true : last
}
```


- https://github.com/vuejs/core/pull/10407 queueJob 降低内存使用

