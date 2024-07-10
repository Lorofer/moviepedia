<template>
  <div class="all-movies">
    <Filters
        id="filters"
        v-bind:currentPage="this.currentPage"
        v-on:theUrlHasBeenCreated="setTheURL"
    />
    <keep-alive>
      <AllMoviesSection
          id="all-movies"
          v-bind:url="this.url"
          v-on:currentPage="setTheCurrentPage"
          v-on:forth="setTheCurrentPage"
          v-on:back="setTheCurrentPage"
      />
    </keep-alive>
  </div>
</template>

<script>
import Filters from "@/components/Filters.vue";
import FilmCard from "@/components/FilmCard.vue";
import AllMoviesSection from "@/components/AllMoviesSection.vue";
export default {
  components:{
    FilmCard,
    Filters,
    AllMoviesSection,
  },
  data(){
    return {
      currentPage: Number,
      url: String,
    };
  },
  methods: {
    setTheURL(url){
      this.url = url;
    },
    setTheCurrentPage(pageNumber){
      this.currentPage = pageNumber;
    },
  },
};
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
</style>