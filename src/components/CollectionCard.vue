<template>
  <div class="card-container">
    <img src="@/assets/img/all-films.png" alt="">
    <h2>{{nameOfCollection}}</h2>
    <p>{{description}}</p>
  </div>
</template>

<script>
export default {
  props: {
    'nameOfCollection': String,
    'description': String,
    //'imagePath': String,
  },
  // computed:{
  //   imagePath(){
  //     return `@/assets/img/${this.imageName}.png`
  //   }
  // },
}
</script>

<style scoped>
.card-container{
  height: 100%;
  text-align: center;
  box-shadow: 0 0 32px 12px rgba(0,0,0,0.1);
  border-radius: 24px;
}
.card-container img{
  padding: 32px 32px 0;
  width: 100%;
}
.card-container h2{
  margin: 24px 0;
  font-size: 28px;
}
.card-container p{
  margin: 0 32px;
  font-size: 18px;
}
</style>