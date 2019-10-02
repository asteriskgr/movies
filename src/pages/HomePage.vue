<template>
  <div class="card text-center m-3">
    <h3 class="card-header">Movies</h3>
    <div class="card-body">
       <input type="text" @input="searchMovie($event)" class="form-control" placeholder="Search" style="margin-bottom:10px"/>

      <div v-for="item in pageOfMovies" :key="item.id">
        <div style="float:left; width:90%;border-bottom: 1px solid black;">{{item.original_title}}</div>
        <div>
          <button class="btn btn-primary" @click="onAction('edit-item', item.id, item.rowIndex)">
            <i class="glyphicon glyphicon-edit"></i>
          </button>
        </div>
      </div>
    </div>
    <paginate
      v-model="page"
      :page-count="total_pages"
      :page-range="3"
      :margin-pages="2"
      :click-handler="clickCallback"
      :prev-text="'Prev'"
      :next-text="'Next'"
      :container-class="'pagination'"
      :page-class="'page-item'"
    ></paginate>
  </div>
</template>

<script>
import movies from "../core/movies";
export default {
  data() {
    return {
      pageOfMovies: [],
      page: 1,
      total_pages: 1
    };
  },
  methods: {
    searchMovie(event){
       let params = {
        PageNumber: 1,
      };
      this.pageOfMovies = [];
      if( event.target.value.trim()!="")
        params.query=encodeURI(event.target.value)
        this.getMovies(params, function() {});
      
    },
    clickCallback: function(pageNum) {
      let params = {
        PageNumber: pageNum
      };
      this.getMovies(params, function() {});
    },
    onAction(action, id, index) {
      console.log('slot action: ' +id)
      $router.push("/movie/" + id);
    },
    getMovies(params, callback) {
      let _movies = new movies();

      _movies.getmovies(params).then(selectedMovies => {
        if (selectedMovies.results) {
          this.pageOfMovies = selectedMovies.results;
          this.total_pages = selectedMovies.total_pages;
        } else {
          alert("Something went wrong");
        }
        callback();
      });
    }
  },
  mounted() {
    
    let params = {
      PageNumber: 1
    };
    this.getMovies(params, function() {});
  }
};
</script>
