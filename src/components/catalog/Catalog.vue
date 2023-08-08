<script setup lang="ts">
import { reactive } from 'vue'
import Navbar from '../Navbar.vue'

const state: { posts: IPost[] } = reactive({
  posts: [
    {
      id: 1,
      userId: 1,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
    },
    {
      id: 1,
      userId: 1,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
    },
    {
      id: 1,
      userId: 1,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
    },
    {
      id: 1,
      userId: 1,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
    },
    {
      id: 1,
      userId: 1,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
    }
  ]
})
</script>

<template>
  <div class="container mx-auto">
    <Navbar />

    <ul class="mb-5">
      <li v-for="post in state.posts" :key="post.is">
        {{ post.title }}
      </li>
    </ul>

    <div>
      <div class="flex justify-between items-center gap-5">
        <div class="flex justify-center items-center w-[400px] h-[300px] bg-slate-400">
          400 x 400
        </div>
        <div class="flex justify-center items-center w-[400px] h-[300px] bg-yellow-400">
          400 x 400
        </div>
        <div class="flex justify-center items-center w-[400px] h-[300px] bg-purple-400">
          400 x 400
        </div>
        <div class="flex justify-center items-center w-[400px] h-[300px] bg-red-400">400 x 400</div>
        <div class="flex justify-center items-center w-[400px] h-[300px] bg-blue-400">
          400 x 400
        </div>
        <div class="flex justify-center items-center w-[400px] h-[300px] bg-green-400">
          400 x 400
        </div>
        <div class="flex justify-center items-center w-[400px] h-[300px] bg-orange-400">
          400 x 400
        </div>
      </div>
    </div>
  </div>
</template>
