<template>
    <div>
        <div class="movie-list">
            <div class="movie-item" @click="goToMovie(1)">
                <img src="../assets/New1.webp" alt="Phim 1">
                <p>CHƯỞNG TÂM</p>
            </div>
            <div class="movie-item" @click="goToMovie(2)">
                <img src="../assets/New2.webp" alt="Phim 2">
                <p>THANH TRA GIẢ GÁI</p>
            </div>
            <div class="movie-item" @click="goToMovie(3)">
                <img src="../assets/New3.webp" alt="Phim 3">
                <p>MẶT TRÁI CỦA MẤT TÍCH</p>
            </div>
            <div class="movie-item" @click="goToMovie(4)">
                <img src="../assets/New4.webp" alt="Phim 4">
                <p>NATRA - HÀNG YÊU KÝ</p>
            </div>
            <div class="movie-item" @click="goToMovie(5)">
                <img src="../assets/New5.webp" alt="Phim 5">
                <p>MIAMI VICE - CHUYÊN ÁN MIAMI</p>
            </div>
            <div class="movie-item" @click="goToMovie(6)">
                <img src="../assets/New6.webp" alt="Phim 6">
                <p>THẾ GIỚI KÍ JURA - VƯƠNG QUỐC SỤP ĐỔ</p>
            </div>
            <div class="movie-item" @click="goToMovie(7)">
                <img src="../assets/New7.webp" alt="Phim 6">
                <p>KUNG FU PANDA 4</p>
            </div>
            <div class="movie-item" @click="goToMovie(8)">
                <img src="../assets/New8.webp" alt="Phim 6">
                <p>THIÊN TÀI LANG BĂM</p>
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

export default {
    methods: {
        goToMovie(movieId) {
            // Thay thế bằng logic chuyển hướng đến trang phim cụ thể
            console.log(`Chuyển đến phim có ID: ${movieId}`);
        }
    }
}
</script>