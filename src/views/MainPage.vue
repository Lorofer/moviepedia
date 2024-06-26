<script>
import CollectionCard from "@/components/CollectionCard.vue";

export default {
  components: {
    CollectionCard,
  },
  methods:{
    a(){
      alert('Этот раздел еще в разработке');
    }
  }
}
</script>

<template>
  <nav class="collections">
    <router-link to="all-movies">
      <CollectionCard
          nameOfCollection="Все фильмы"
          description="Найти подходящий фильм с помощью фильтров"
      />
    </router-link>
    <div v-on:click="a">
      <CollectionCard
          nameOfCollection="Топ фильмов"
          description="Лушие фильмы по разным рейтингам"
      />
    </div>
    <div v-on:click="a">
      <CollectionCard
          nameOfCollection="Рандомный фильм"
          description="Поможет определиться с выбором"
      />
    </div>
  </nav>
</template>

<style scoped>
.collections{
  display: grid;
  grid: auto / repeat(3, 1fr);
  grid-gap: 64px;
  height: calc(100vh - 256px);
}
</style>