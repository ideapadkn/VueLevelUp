<script setup lang="ts"></script>

<template>
  <div class="flex justify-center items-center h-[100px]">
    <nav>
      <ul class="flex justify-between items-center gap-5">
        <router-link to="/">
          <li class="text-xl text-black hover:text-yellow-400">Home</li>
        </router-link>
        <router-link to="/catalog">
          <li class="text-xl text-black hover:text-yellow-400">Catalog</li>
        </router-link>
        <router-link to="/about">
          <li class="text-xl text-black hover:text-yellow-400">About</li>
        </router-link>
      </ul>
    </nav>
  </div>
</template>
