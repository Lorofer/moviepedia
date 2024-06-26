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
</style>
<script setup>
import Header from "@/components/Header.vue";
</script>