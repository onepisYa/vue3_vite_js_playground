<script setup>
import {
  ref,
  reactive,
} from 'vue';
import Test from "@/api/index";

console.log(Test)

defineProps({
  msg: String,
});

const state = reactive({
  count: 0,
});

const foo = ref(2);
// const { data:posts, error, loading, execute } = Test.get_all_posts();
let params = {}
const { data: posts, error, loading, execute: reuseable_get_comments } = Test.get_comments_by_post_id_query_style(params);

reuseable_get_comments()

const get_data = () => {
  let params = {
    post_id: 1,
    foo: null,
    bar: undefined,
    foobar:'foobar'
  }
  reuseable_get_comments({ params })
}

const {data, new_post_error, new_post_loading, execute: resuseable_new_post} = Test.new_post({
  title: "test",
  // body: "test body",
  body: null,
  // userId: 1,
  userId: undefined,
})
const add_posts = () => {
let post = {
  title: "test",
  // body: "test body",
  body: null,
  // userId: 1,
  userId: undefined,
}
resuseable_new_post(post)
}
</script>

<template>
  <h1>{{ msg }}</h1>
  <button @click="get_data">click me get data</button>
  <button @click="add_posts">click me post data</button>
  <div>{{ posts }}</div>
  <div class="card">
    <button type="button" @click="state.count++">
      count is {{ state.count }}
    </button>
    <button type="button" @click="foo++">
      foo is {{ foo }}
    </button>
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
</style>
