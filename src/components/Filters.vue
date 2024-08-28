<script>
import {useAllMoviesStore} from "@/store/allMoviesStore";

export default {
  data(){
    return {
      allMoviesStore: useAllMoviesStore(),
      isGenresMenuActive: false,
    };
  },
  mounted(){
    window.addEventListener('scroll', this.setFiltersHeight);
    this.setFiltersHeight();
  },
  methods:{
    getTop(){
      const header = document.querySelector('.header');
      const HeaderBoundingClientRect = header.getBoundingClientRect().top;
      const filtersBlockMargin = 40;

      if(HeaderBoundingClientRect + header.offsetHeight > filtersBlockMargin){
        return HeaderBoundingClientRect + header.offsetHeight;
      }
      else{
        return filtersBlockMargin;
      }
    },
    setFiltersHeight(){
      const filtersBlock = document.getElementById('filters');

      const filtersBlockMargin = 40;
      const clientHeight = document.documentElement.clientHeight;

      filtersBlock.style.height =
          `${clientHeight - filtersBlockMargin - this.getTop()}px`;

      filtersBlock.style.top =
          `${this.getTop()}px`;
    },

    genresToggle(genre){
      return this.allMoviesStore.selectedGenres.has(genre);
    }
  },
  unmounted(){
    window.removeEventListener('scroll', this.setFiltersHeight);
  },
}
</script>

<template>
  <section id="filters">
    <form action="">
      <div id="rating-container">
        <p class="filters-label"><label>Рейтинг:</label></p>
        <div id="rating-inputs-container">
          <input v-model="this.allMoviesStore.minRating"
                 placeholder="От"
                 name="min-rating"
                 type="number"
                 min="1" max="10"
                 step="0.1"
          >
          <input v-model="this.allMoviesStore.maxRating"
                 placeholder="До"
                 name="max-rating"
                 type="number"
                 min="1" max="10"
                 step="0.1"
          >
        </div>
      </div>
      <div id="genres-container" :class="{'show-genres-list': isGenresMenuActive}">
        <p class="filters-label"><label>Жанры:</label></p>
        <div id="select-genre">
          <p>Выбрать</p>
          <img
              id="select-genre-arrow"
              src="@/assets/img/arrow.png" alt=""
              v-on:click="this.isGenresMenuActive = !this.isGenresMenuActive"
          >
        </div>
        <ul id="genres-list">
          <li class="genres-list-item">
            <label for="comedy" :class="['genres-list-item-label', {'selected': this.genresToggle('комедия')}]">
              <input type="checkbox" value="комедия" name="" id="comedy" v-model="this.allMoviesStore.selectedGenres">
              Комедии
              <span class="mark"></span>
            </label>
          </li>
          <li class="genres-list-item">
            <label for="horrors" :class="['genres-list-item-label', {'selected': this.genresToggle('ужасы')}]">
              <input type="checkbox" value="ужасы" name="" id="horrors" v-model="this.allMoviesStore.selectedGenres">
              Ужасы
              <span class="mark"></span>
            </label>
          </li>
          <li class="genres-list-item">
            <label for="fantasy" :class="['genres-list-item-label', {'selected': this.genresToggle('фантастика')}]">
              <input type="checkbox" value="фантастика" name="" id="fantasy" v-model="this.allMoviesStore.selectedGenres">
              Фантастика
              <span class="mark"></span>
            </label>
          </li>
          <li class="genres-list-item">
            <label for="action" :class="['genres-list-item-label', {'selected': this.genresToggle('боевик')}]">
              <input type="checkbox" value="боевик" name="" id="action" v-model="this.allMoviesStore.selectedGenres">
              Боевики
              <span class="mark"></span>
            </label>
          </li>
          <li class="genres-list-item">
            <label for="detective" :class="['genres-list-item-label', {'selected': this.genresToggle('детектив')}]">
              <input type="checkbox" value="детектив" name="" id="detective" v-model="this.allMoviesStore.selectedGenres">
              Детективы
              <span class="mark"></span>
            </label>
          </li>
        </ul>
      </div>
      <div>
        <button class="search" type="button" v-on:click="this.allMoviesStore.getMovies">Найти</button>
      </div>
    </form>

    <router-link class="back" to="/">Вернуться на главную</router-link>
  </section>
</template>

<style scoped>
#filters{
  width: 300px;
  padding: 24px;
  box-shadow: 0 0 16px 2px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
@media (max-width: 1280px){
  #filters {
    width: 260px;
  }
}
#filters form > *{
  margin-bottom: 24px;
}

.filters-label{
  font-size: 18px;
  margin-bottom: 8px;
}
#rating-inputs-container{
  width: 100%;
  display: flex;
  justify-content: space-between;
}
#rating-inputs-container input{
  height: 36px;
  font-size: 16px;
  padding: 8px;
  width: 47%;
}

#select-genre{
  width: 100%;
  height: 36px;
  padding: 8px;
  border: 1px solid #262C40;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
#select-genre > p{
  font-size: 18px;
  color: grey;
}
#select-genre > img{
  height: 100%;
  transform: rotate(90deg);
  cursor: pointer;
}
.show-genres-list #select-genre > img{
  transform: rotate(-90deg);
}
#genres-list{
  position: absolute;
  width: 252px;
  background-color: #fff;
  border: 1px solid #262C40;
  z-index: 1;
  display: none;
}
@media (max-width: 1280px){
  #genres-list {
    width: 212px;
  }
}
.show-genres-list #genres-list{
  display: block;
}
.genres-list-item{
  list-style-type: none;
  font-size: 18px;
  height: 36px;
}
.genres-list-item:hover{
  background-color: rgba(128, 128, 128, 0.2);
}
.genres-list-item-label{
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 8px;
}
.genres-list-item-label input{
  display: none;
}
.mark{
  width: 20px;
  height: 20px;
  display: none;
  position: relative;
}
.selected .mark{
  width: 20px;
  height: 20px;
  display: inline-block;
  position: relative;
}
.mark::before{
  position: absolute;
  left: -3.1px;
  top: 50%;
  height: 50%;
  width: 2px;
  background-color: black;
  content: "";
  transform: translateX(10px) rotate(-45deg);
  transform-origin: left bottom;
  border-radius: 3px;
}
.mark::after{
  position: absolute;
  left: -3.1px;
  bottom: 0;
  height: 2px;
  width: 100%;
  background-color: black;
  content: "";
  transform: translateX(10px) rotate(-45deg);
  transform-origin: left bottom;
  border-radius: 3px;
}

.search{
  width: 100%;
  height: 48px;
  border-radius: 24px;
  border: 0;
  background-color: #262C40;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 8px 4px rgba(0,0,0,0.2);

  transform: scale(1);
  transition: 0.4s;
}
.search:hover{
  transform: scale(1.05);
}

.back{
  width: 100%;
  height: 48px;
  border-radius: 24px;
  font-weight: bold;

  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 8px 2px rgba(0,0,0,0.2);

  transform: scale(1);
  transition: 0.4s;
}
.back:hover{
  transform: scale(1.05);
}
</style>