<template>
  <section class="all-movies">
    <Filters id="filters"/>
    <div id="all-movies">
      <div id="all-movies-container">
        <FilmCardPlaceholder v-if="allMoviesStore.loader" v-for="i of 50"/>
        <FilmCard
            v-else
            v-for="movie of allMoviesStore.movies"
            :key="movie.id"
            :film="movie"
        />
      </div>
      <Pagination/>
    </div>
  </section>
</template>

<script setup>
import Filters from "@/components/Filters.vue";
import FilmCard from "@/components/FilmCard.vue";
import Pagination from "@/components/Pagination.vue";
import FilmCardPlaceholder from "@/components/FilmCardPlaceholder.vue";

import {useAllMoviesStore} from "@/store/allMoviesStore";
const allMoviesStore = useAllMoviesStore();

import {onMounted} from "vue";
onMounted(() => {
  allMoviesStore.getMovies();
})

</script>

<style scoped>
#filters{
  position: fixed;
  margin-bottom: 40px;
}
#all-movies{
  width: calc(100% - 340px);
  margin-left: 40px;
  margin-bottom: 40px;
  position: relative;
  left: 300px;
}
@media (max-width: 1280px){
  #all-movies{
    left: 260px;
    width: calc(100% - 300px);
  }
}

#all-movies-container{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(165px, 1fr));
  grid-template-rows: auto;
  grid-column-gap: 32px;
  grid-row-gap: 48px;
}
</style>