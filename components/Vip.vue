<template>
    <Header></Header>
    <div class="container">
      <div class="package-card" v-for="(packages, index) in packages" :key="index">
        <img :src="packages.image" :alt="packages.title" />
        <h2>{{ packages.title }}</h2>
        <div v-html="packages.description"></div>
        <div class="price">{{ packages.price }} VNĐ</div>
        <button class="register-button" @click="DangKy">Đăng Ký</button>
      </div>
    </div>
    <Footer></Footer>
  </template>
  
  <script>
  import imageBasic from '@/assets/Hot2.webp'; // Đường dẫn đến ảnh trong assets
  import imageAdvanced from '@/assets/Hot3.webp'; // Đường dẫn đến ảnh trong assets
  import imagePremium from '@/assets/Hot4.webp'; // Đường dẫn đến ảnh trong assets
  import Header from './Header.vue';
  import Footer from './Footer.vue';
  
  export default {
    components: {
        Header,
        Footer
    },
    data() {
      return {
        packages: [
          {
            title: '1 tháng',
            description: 'Xem phim độc quyền<br/>Kho phim Việt, Trung, Hàn lớn nhất<br/>Thể thao đỉnh cao',
            price: '100.000',
            image: imageBasic // Sử dụng biến đã import
          },
          {
            title: '3 tháng',
            description: 'Xem phim độc quyền<br/>Kho phim Việt, Trung, Hàn lớn nhất<br/>Thể thao đỉnh cao',
            price: '300.000',
            image: imageAdvanced // Sử dụng biến đã import
          },
          {
            title: '6 tháng',
            description: 'Xem phim độc quyền<br/>Kho phim Việt, Trung, Hàn lớn nhất<br/>Thể thao đỉnh cao',
            price: '500.000',
            image: imagePremium // Sử dụng biến đã import
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: space-between;
    padding: 20px; /* Thêm padding cho container */
  }
  
  .package-card {
    background: white;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 30%; /* Đặt chiều rộng cho mỗi khung */
    margin: 10px; /* Khoảng cách giữa các khung */
    text-align: center;
    padding: 20px;
    transition: transform 0.3s; /* Hiệu ứng khi hover */
  }
  
  .package-card:hover {
    transform: scale(1.05); /* Phóng to khi hover */
  }
  
  img {
    width: 100%; /* Đảm bảo ảnh vừa với khung */
    border-radius: 8px;
  }
  
  .price {
    font-size: 1.5em;
    color: orangered;
    margin-top: 10px;
  }
  .register-button {
    background-color: orangered; /* Màu nền */
    color: white; /* Màu chữ */
    border: none; /* Bỏ viền */
    border-radius: 10px; /* Bo tròn góc */
    padding: 10px 20px; /* Padding cho nút */
    margin-top: 10px;
    font-size: 1em; /* Kích thước chữ */
    cursor: pointer; /* Thay đổi con trỏ khi hover */
    transition: background-color 0.3s, transform 0.3s; /* Hiệu ứng chuyển tiếp */
}

  .register-button:hover {
    background-color: darkorange; /* Màu nền khi hover */
    transform: scale(1.05); /* Phóng to khi hover */
  }
  </style>