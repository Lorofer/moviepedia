<script>
import CollectionCard from "@/components/CollectionCard.vue";

export default {
  components: {
    CollectionCard,
  },
  methods:{
    a(){

    }
  }
}
</script>

<template>
  <nav class="collections">
    <router-link to="all-movies">
      <CollectionCard
          imageFileName="all-movies.png"
          nameOfCollection="Все фильмы"
          description="Найти подходящий фильм с помощью фильтров"
      />
    </router-link>
    <div v-on:click="a">
      <CollectionCard
          imageFileName="top-movies.png"
          nameOfCollection="Топ фильмов"
          description="Лушие фильмы по разным рейтингам"
      />
    </div>
    <div v-on:click="a">
      <CollectionCard
          imageFileName="random-movie.png"
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
@media (max-width: 1280px) {
  .collections{
    grid-gap: 32px;
  }
}
@media (max-width: 1140px) {
  .collections{
    height: auto;
    grid: repeat(3, 1fr) / auto;
    margin-bottom: 32px;
  }
}
</style>