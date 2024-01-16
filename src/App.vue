<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavigationBar from './components/NavigationBar.vue'
import BottomNavigation from './components/BottomNavigation.vue'
</script>

<template>
<div>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <header class="sticky top-0 z-50">
    <NavigationBar/>
  </header>
  <body class="flex flex-col min-h-screen mt-8">
    <RouterView />
  </body>
  <footer class="mt-auto">
    <BottomNavigation />
  </footer>
</div>
</template>

<style >
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,700;1,500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');

</style>
