<template>
  <div class="search-bar">
    <input
      type="search"
      id="site-search"
      placeholder="rechercher sur le site"
    />
  </div>
</template>

<script>
export default {
  name: "SearchBar",
};
</script>

<style scoped>
input {
  border-radius: 2em;
  margin-top: 170px;
  width: 50%;
  height: 60px;
  padding-left: 15px;
  font-size: 20px;
}

button {
  margin-top: 150px;
  width: 10%;
  height: 40px;
  font-size: 20px;
  background-color: aqua;
}

.search-bar {
  object-fit: cover;
  height: 400px;
  background-image: url("../assets/marss.jpeg");
  background-size: 100% 400px;
  align-items: center;
}
@media (max-width: 700px) {
  .search-bar {
    object-fit: cover;
    width: 100%;
    height: 150px;
    background-image: url("../assets/marss.jpeg");
    background-size: 100% 150px;
  }
  input {
    border-radius: 2em;
    margin-top: 50px;
    width: 60%;
    height: 30px;
    padding-left: 15px;
    font-size: 10px;
  }
}
</style>
