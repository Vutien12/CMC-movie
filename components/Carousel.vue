<template>
    <div class="carousel">
      <div class="slides" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div class="slide" v-for="(slide, index) in slides" :key="index">
          <img :src="slide.src" :alt="slide.alt" class="carousel-image" />
        </div>
      </div>
      <button class="carousel-control-prev" @click="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true">&#10094;</span>
        <span class="visually-hidden"></span>
      </button>
      <button class="carousel-control-next" @click="next">
        <span class="carousel-control-next-icon" aria-hidden="true">&#10095;</span>
        <span class="visually-hidden"></span>
      </button>
    </div>
  </template>
  
  <script>
  import slide1 from '@/assets/slide1.jpg';
  import slide2 from '@/assets/slide2.jpg';
  import slide3 from '@/assets/slide3.jpg';
  
  export default {
    data() {
      return {
        currentIndex: 0,
        slides: [
          { src: slide1, alt: 'Slide 1' },
          { src: slide2, alt: 'Slide 2' },
          { src: slide3, alt: 'Slide 3' },
        ]
      };
    },
    methods: {
      next() {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
      },
      prev() {
        this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
      },
      startAutoplay() {
        this.autoplay = setInterval(this.next, 3000);
      },
      stopAutoplay() {
        clearInterval(this.autoplay);
      }
    },
    mounted() {
      this.startAutoplay();
    },
    beforeDestroy() {
      this.stopAutoplay();
    }
  };
  </script>
  
  <style>
  .carousel {
    position: relative;
    overflow: hidden;
  }
  .slides {
    display: flex;
    transition: transform 0.5s ease;
  }
  .slide {
    min-width: 100%;
  }
  .carousel-image {
    width: 100%; /* Hoặc chiều rộng mong muốn */
    height: auto; /* Giữ tỷ lệ khung hình */
    max-height: 800px; /* Đặt chiều cao tối đa nếu cần */
    object-fit: cover; /* Cắt ảnh để vừa với khung */
  }
  .carousel-control-prev,
  .carousel-control-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: transparent; /* Xóa nền */
    border: none; /* Xóa viền */
    cursor: pointer;
    z-index: 10;
    font-size: 40px; /* Kích thước mũi tên */
    color: #FFFFFF; /* Màu sắc mũi tên */
  }
  .carousel-control-prev {
    left: 10px;
  }
  .carousel-control-next {
    right: 10px;
  }
  </style>