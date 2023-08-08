<script setup lang="ts">
import { reactive, ref } from 'vue'
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
      id: 2,
      userId: 1,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
    },
    {
      id: 3,
      userId: 1,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
    },
    {
      id: 4,
      userId: 1,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
    },
    {
      id: 5,
      userId: 1,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
    }
  ]
})
const title = ref('')

const removePost = (id: number) => {
  state.posts = state.posts.filter((post) => post.id !== id)
}
const addPost = () => {
  if (title.value) {
    state.posts = [
      ...state.posts,
      {
        id: Date.now(),
        title: title.value,
        userId: Date.now(),
        body: 'bla bla bla'
      }
    ]
    title.value = ''
  } else {
    console.log('err')
  }
}
</script>

<template>
  <div class="container mx-auto">
    <Navbar />

    <div class="mb-5">
      <h1 class="font-semibold text-3xl mb-2">Create Post</h1>
      <form @submit.prevent>
        <input class="p-2 border-2 mr-5 outline-none focus:border-yellow-400" type="text" v-model.trim="title" />
        <button class="p-2 border-2 hover:border-yellow-400 transition-all" @click.stop="addPost()">Create Post</button>
      </form>
    </div>
    <ul class="mb-5">
      <li
        class="mb-5 border-2 p-2 flex justify-between items-center"
        v-for="post in state.posts"
        :key="post.is"
      >
        <span class="mr-5">{{ post.title }}</span>
        <button class="border-2 p-2 hover:border-yellow-400 transition-all" @click="removePost(post.id)">Remove</button>
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
