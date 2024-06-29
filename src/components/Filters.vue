<script>
export default {
  props:{
    currentPage: Number,
  },
  data(){
    return {
      minRating: undefined,
      maxRating: undefined,
    };
  },
  mounted(){
    window.addEventListener('scroll', this.setFiltersHeight);
    this.setFiltersHeight();
  },
  watch:{
    currentPage(){
      this.createURL();
    }
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

    createURL(){
      const url = new URL('https://api.kinopoisk.dev/v1.4/movie');
      const params = {
        page: this.currentPage,
        limit: 50,
        notNullFields: [
          'name', 'premiere.russia', 'poster.url',
        ],
        sortField: 'rating.kp',
        sortType: -1,
        type: [
          'movie', 'cartoon',
        ],
        'rating.kp': `${this.minRating || 1}-${this.maxRating || 10}`,
        'genres.name': [
          '!документальный', '!короткометражка',
          '!музыка', '!игра', '!новости',
          '!концерт', '!реальное ТВ', '!мюзикл'
        ],
      };

      for(let param of Object.entries(params)){
        if(Array.isArray(param[1])){
          for(let value of param[1]){
            url.searchParams.append(param[0], value);
          }
        }
        else{
          url.searchParams.set(param[0], param[1].toString());
        }
      }

      this.$emit('theUrlHasBeenCreated', url.toString());
    },

  },
  unmounted(){
    window.removeEventListener('scroll', this.setFiltersHeight);
  },
}
</script>

<template>
  <section id="filters">
    <form action="">
      <div>
        <label><p>Рейтинг:</p></label>
        <div class="rating-inputs-container">
          <input v-model="minRating"
                 placeholder="От"
                 name="min-rating"
                 type="number"
                 min="1" max="10"
                 step="0.1"
          >
          <input v-model="maxRating"
                 placeholder="До"
                 name="max-rating"
                 type="number"
                 min="1" max="10"
                 step="0.1"
          >
        </div>
      </div>
      <div>
        <button class="search" type="button" v-on:click="createURL">найти</button>
      </div>
    </form>

    <router-link class="back" to="/">вернуться на главную</router-link>
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
form > div{
  margin-bottom: 24px;
}
label > p{
  margin-bottom: 12px;
  font-size: 18px;
}
.rating-inputs-container{
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.rating-inputs-container > input{
  height: 36px;
  font-size: 16px;
  padding: 8px;
  width: 47%;
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