<script setup lang="ts"></script>

<template>
  <div class="flex justify-center items-center h-[100px]">
    <nav>
      <ul class="flex justify-between items-center gap-5">
        <router-link to="/">
          <li class="text-xl text-black">Home</li>
        </router-link>
        <router-link to="/catalog">
          <li class="text-xl text-black">Catalog</li>
        </router-link>
        <router-link to="/about">
          <li class="text-xl text-black">About</li>
        </router-link>
      </ul>
    </nav>
  </div>
</template>
