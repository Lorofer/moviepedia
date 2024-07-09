<template>
  <Header/>
  <router-view v-slot="{ Component }">
<!--    <keep-alive>-->
      <component :is="Component"/>
<!--    </keep-alive>-->
  </router-view>
</template>

<style>
#app{
  margin: 0 48px;
}
@media (max-width: 1280px) {
  #app{
    margin: 0 32px;
  }
}
</style>
<script setup>
import Header from "@/components/Header.vue";
</script>