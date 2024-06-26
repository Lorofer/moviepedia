<script>
export default {
  props:{
    currentPage: Number,
  },
}
</script>

<template>
<nav id="pagination">
  <div class="buttons-container">
    <button v-on:click="this.$emit('back', (this.currentPage - 1 || 1))">
      <img src="@/assets/img/arrow.png" alt="">
    </button>
    <button v-on:click="this.$emit('forth', this.currentPage + 1)">
      <img src="@/assets/img/arrow.png" alt="">
    </button>
  </div>
</nav>
</template>

<style scoped>
#pagination{
  width: 100%;
  margin-top: 24px;
  display: flex;
  justify-content: center;
}
#pagination .buttons-container{
  width: 120px;
  display: flex;
  justify-content: space-between;
}
#pagination button{
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 0;
  background-color: #fff;
  box-shadow: 0 0 8px 4px rgba(0,0,0,0.2);

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  transition: 0.4s;
  transform: scale(1);
}
#pagination button:hover{
  transform: scale(1.05);
}
#pagination button img{
  width: 60%;
  height: 60%;
  margin-left: 5px;
}
#pagination button:first-of-type img{
  transform: rotate(180deg);
  margin-left: 0;
  margin-right: 5px;
}
</style>