<template>
  <router-link :to="routePath" class="button">
    <div class="card-list">
      <!-- <span>{{ place.id }} </span> -->
      <img class="card-image" :src="place.galery_pictures" />
      <div class="rating">
        <!--
                        --><a href="#5" title="Donner 5 étoiles">☆</a>
        <!--
                        --><a href="#4" title="Donner 4 étoiles">☆</a>
        <!--
                        --><a href="#3" title="Donner 3 étoiles">☆</a>
        <!--
                        --><a href="#2" title="Donner 2 étoiles">☆</a>
        <!--
                        --><a href="#1" title="Donner 1 étoile">☆</a>
      </div>
      <div class="text">
        <span class="card-title">{{ place.name }} </span>
        <br />
        <br />
        <span class="card-content">{{ place.description }} </span>
        <span>{{ place.city }} {{ place.postal_code }} </span>
        <span>{{ place.adress }} </span>
        <span>{{ place.phone }} </span>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "PlaceList",
  props: { place: Object },
  data() {
    return { routePath: "/places/" + this.place.id };
  },
  methods: {},
};
</script>

<style scoped>
.text {
  padding: 10px;
}

/* .card-list {
  align-items: center;
  border: 2px solid;
  display: flex;
  height: auto;
}
.card-image {
  width: 100%;
}
.card-title {
  font-size: auto;
} */
</style>
