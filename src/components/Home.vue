<template>
  <div>
    <Header></Header>
    <div class="separator"></div> <!-- Đường phân cách -->
    <Carousel></Carousel>
    <div class="movie-new">
      <h1>Phim Mới</h1>
      <span @click="goToAllMovies" class="all-link">Xem Tất Cả</span>
    </div>
    <HomeNew></HomeNew>
    <div class="movie-hot">
      <h1>Phim Hot</h1>
      <span @click="goToAllMoviesHot" class="all-link">Xem Tất Cả</span>
    </div>
    <HomeHot></HomeHot>
    <div class="movie-series">
      <h1>Phim Bộ</h1>
      <span @click="goToAllMoviesSeries" class="all-link">Xem Tất Cả</span>
    </div>
    <HomeSeries></HomeSeries>
    <div class="movie-action">
      <h1>Phim Hành Động</h1>
      <span @click="goToAllMoviesAction" class="all-link">Xem Tất Cả</span>
    </div>
    <HomeAction></HomeAction>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './Header.vue';
import Carousel from './Carousel.vue';
import Footer from './Footer.vue';
import HomeNew from './HomeNew.vue';
import HomeHot from './HomeHot.vue';
import HomeSeries from './HomeSeries.vue';
import HomeAction from './HomeAction.vue';

export default {
  components: {
    Header,
    Carousel,
    Footer,
    HomeNew,
    HomeHot,
    HomeSeries,
    HomeAction
  },
  methods: {
    goToAllMovies() {
      this.$router.push({ name: 'PageNew' }); // Adjust the route name as needed
    },
    goToAllMoviesHot() {
      this.$router.push({ name: 'Hot' }); // Adjust the route name as needed
    },
    goToAllMoviesSeries() {
      this.$router.push({ name: 'Series' }); // Adjust the route name as needed
    },
    goToAllMoviesAction() {
      this.$router.push({ name: 'Action' }); // Adjust the route name as needed
    }
    
  }
}
</script>

<style scoped>
.movie-new, .movie-hot, .movie-series, .movie-action {
  display: flex;
  justify-content: space-between; /* Aligns items on the same line */
  align-items: center; /* Centers items vertically */
  margin-top: 20px; /* Adds some space above the section */
}

h1 {
  color: aliceblue;
  margin: 0; /* Removes default margin */
}

.all-link {
  cursor: pointer;
  color: white; /* Change color for better visibility */
  text-align: right;
}

.all-link:hover {
  color: orangered; /* Text color on hover */
}
</style>