<template>
  <div class="card text-center m-3">
    <router-link to="/" class="back-link">Back</router-link>
    <div class="card-body">
      <h3 class="card-header">{{getTitle}}</h3>
      <img v-bind:src="`https://image.tmdb.org/t/p/original/`+imageUrl" height="500px" /> 
      <div>{{getDescription}}</div>
      <div><star-rating v-model="stars" increment=0.1 read-only=true></star-rating></div>
    </div>
  </div>
</template>

<script>
import movies from "../core/movies";
export default {
  data() {
    return {
      title: "",
      imageUrl: "",
      stars: 1.5,
      description: ""
    };
  },
  mounted() {},
  computed: {
    getTitle() {
      return this.title;
    },
    getDescription() {
      return this.description;
    }
  },
  methods: {
    getMovie(params, callback) {
      let _movies = new movies();
      _movies.getmovie(params).then(selectedMovie => {
        if (selectedMovie) {
          this.title = selectedMovie.original_title;
          this.imageUrl = selectedMovie.poster_path;
          this.description = selectedMovie.overview;
          this.stars = parseFloat(selectedMovie.vote_average / 2);
        } else {
          alert("Something went wrong");
        }
        callback();
      });
    }
  },
  created() {
    let params = {
      id: this.$route.params.id
    };
    this.getMovie(params, function() {
      
    });
  }
};
</script>
