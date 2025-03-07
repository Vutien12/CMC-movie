<template>
    <div>
        <Header></Header>
        <h1>Phim Hành Động</h1>
        <div class="movie-list">
            <div class="movie-item" @click="goToMovie(1)">
                <img src="../assets/Tuhaitrongminh.webp" alt="Phim 1">
                <p>TỨ HẢI TRONG PHIM</p>
            </div>
            <div class="movie-item" @click="goToMovie(2)">
                <img src="../assets/Hot2.webp" alt="Phim 2">
                <p>SÁNG TẠO DOANH NHÂN CHÂU Á</p>
            </div>
            <div class="movie-item" @click="goToMovie(3)">
                <img src="../assets/Hot3.webp" alt="Phim 3">
                <p>TWISTERS - LỐC XOÁY TỬ THẦN</p>
            </div>
            <div class="movie-item" @click="goToMovie(4)">
                <img src="../assets/Hot4.webp" alt="Phim 4">
                <p>VẺ ĐẸP TIỀM ẨN</p>
            </div>
            <div class="movie-item" @click="goToMovie(5)">
                <img src="../assets/Hot5.webp" alt="Phim 5">
                <p>TÔI TÌ TIỆN PHẦN 4</p>
            </div>
            <div class="movie-item" @click="goToMovie(6)">
                <img src="../assets/Hot6.webp" alt="Phim 6">
                <p>TỰ CẨM</p>
            </div>
            <div class="movie-item" @click="goToMovie(7)">
                <img src="../assets/Hot7.webp" alt="Phim 6">
                <p>KHỦNG LONG TIẾN LÊN</p>
            </div>
            <div class="movie-item" @click="goToMovie(8)">
                <img src="../assets/Hot8.webp" alt="Phim 6">
                <p>FIRST MAN - NGƯỜI ĐẦU TIÊN</p>
            </div>
            
            <!-- Thêm nhiều hàng ở đây -->
        </div>
    </div>
</template>

<style scoped>
h1 {
    color: aliceblue;
    text-align: center;
}

.movie-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 50px;
}

.movie-item {
    width: 23%; /* Điều chỉnh kích thước để phù hợp với 4 ảnh trên một hàng */
    margin-bottom: 20px;
    cursor: pointer;
    text-align: center; /* Canh giữa nội dung */
}

.movie-item img {
    width: 100%;
    height: auto;
    border-radius: 8px;
}

.movie-item p {
    margin-top: 10px; /* Khoảng cách giữa ảnh và tên phim */
    color: white; /* Màu chữ có thể điều chỉnh */
}
</style>

<script>
import Header from './Header.vue';

export default {
    components: {
        Header
    },
    methods: {
        goToMovie(movieId) {
            // Thay thế bằng logic chuyển hướng đến trang phim cụ thể
            console.log(`Chuyển đến phim có ID: ${movieId}`);
        }
    }
}
</script>