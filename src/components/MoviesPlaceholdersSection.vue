<script>
import FilmCardPlaceholder from "@/components/FilmCardPlaceholder.vue";

export default {
  name: "MoviesPlaceholdersSection",
  components: {FilmCardPlaceholder}
}
</script>

<template>
  <section id="movies-placeholders">
    <FilmCardPlaceholder
        v-for="i in 50"
    />
  </section>
</template>

<style scoped>
#movies-placeholders{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(165px, 1fr));
  grid-template-rows: auto;
  grid-column-gap: 32px;
  grid-row-gap: 48px;
  overflow-y: hidden;
}
</style>