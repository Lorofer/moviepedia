<script setup>

</script>

<template>
  <section class="header">
    <input>
    <span class="avatar"></span>
  </section>
</template>

<style scoped>
.header{
  display: flex;
  justify-content: right;
  align-items: center;
  max-width: 100%;
  height: 128px;
}
.header input{
  width: 100%;
  height: 48px;
  border-radius: 24px;
  border: 1px solid grey;
  //box-shadow: 0 0 32px 12px rgba(0,0,0,0.1);
  //border: 0;
}
.avatar{
  display: inline-block;
  width: 48px;
  height: 48px;
  background-color: grey;
  border-radius: 50%;
  margin-left: 12px;
}
</style>