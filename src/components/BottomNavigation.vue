<template>
  <div class="btm-nav">
    <router-link to="/" class="text-primary" :class="{ active:  $route.path == '/' || $route.path.split('/')[1] == 'product'}">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 2048 2048"><path fill="currentColor" d="M1024 1000v959l-64 32l-832-415V536l832-416l832 416v744h-128V680zm-64-736L719 384l621 314l245-122zm-64 1552v-816L256 680v816zM335 576l625 312l238-118l-622-314zm1073 1216v-128h640v128zm0-384h640v128h-640zm-256 640v-128h128v128zm0-512v-128h128v128zm0 256v-128h128v128zm-128 24h1zm384 232v-128h640v128z"/></svg>
    </router-link>
    <router-link to="/transaction" class="text-primary" :class="{ active:  $route.path == '/transaction' || $route.path.split('/')[1] == 'buy'}">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M4 7a1 1 0 0 0 0 2h2.22l2.624 10.5c.223.89 1.02 1.5 1.937 1.5h12.47c.903 0 1.67-.6 1.907-1.47L27.75 10h-2.094l-2.406 9H10.78L8.157 8.5A1.984 1.984 0 0 0 6.22 7zm18 14c-1.645 0-3 1.355-3 3s1.355 3 3 3s3-1.355 3-3s-1.355-3-3-3m-9 0c-1.645 0-3 1.355-3 3s1.355 3 3 3s3-1.355 3-3s-1.355-3-3-3m3-14v5h-3l4 4l4-4h-3V7zm-3 16c.564 0 1 .436 1 1c0 .564-.436 1-1 1c-.564 0-1-.436-1-1c0-.564.436-1 1-1m9 0c.564 0 1 .436 1 1c0 .564-.436 1-1 1c-.564 0-1-.436-1-1c0-.564.436-1 1-1"/></svg>
    </router-link>
    <router-link to="/data-penjualan" class="text-primary items-center" :class="{ active:  $route.path == '/data-penjualan'}">
      <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path d="M8 44V4h23l9 10.5V44z"/><path d="M15 28h6v7h-6zm-1 7h20M21 23h6v12h-6zm6-5h6v17h-6z"/></g></svg>
    </router-link>
  </div>
</template>

<style scoped>

</style>

