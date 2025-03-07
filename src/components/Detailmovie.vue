<template>
    <div>
        <Header></Header>
        <div class="video-container">
            <iframe 
                src="https://www.youtube.com/embed/q-XeDUFvd78" 
                frameborder="0" 
                allowfullscreen>
            </iframe>
        </div>
        <div class="movie-info">
            <div class="left-column">
                <h2>Bạn Bạn Bè Bè</h2>
                <p>Năm phát hành: 2025</p>
                <p>Tập: 12/16 tập</p>
                <p>Quốc gia: Hàn Quốc</p>
                <p>Chủ đề: Tình dục, chất gây nghiện, ngôn ngữ thô tục, hành vi nguy hiểm, dễ bắt chước</p>
                <p>Lịch phát sóng: 22h từ Chủ nhật đến thứ 4 hàng tuần</p>
                <p>
                    Woo Seul Gi, một nữ sinh tỉnh lẻ, bất ngờ chuyển đến học ở ngôi trường trung học danh giá chỉ dành riêng cho những học sinh xuất sắc nhất nước. 
                    Ở trường mới, cô nhận được sự quan tâm đặc biệt của Yoo Je Yi, nữ sinh tài năng đến từ gia đình quyền thế và nổi tiếng nhất trường. 
                    Tuy nhiên, tình bạn tưởng chừng đẹp đẽ lúc ban đầu dần dần biến thành một cuộc cạnh tranh đầy nguy hiểm. 
                    Friendly Rivalry khắc họa mặt tối của môi trường học đường, nơi mà áp lực thành tích và sự ganh đua có thể đẩy con người đến những hành động cực đoan.
                </p>
            </div>
            <div class="right-column">
                <p><strong>Diễn viên:</strong> Hyeri, Jung Soo Bin, Kang Hye Won</p>
                <p><strong>Đạo diễn:</strong> Kim Tae Hee</p>
                <p><strong>Thể loại:</strong> Học đường, Tâm lý, Bí ẩn</p>
                <p><strong>Danh mục:</strong> Phim bộ Hàn Quốc</p>
            </div>
        </div>
    </div>
    <Footer></Footer>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';
export default {
    components: {
        Header,
        Footer
    }
}
</script>

<style scoped>
.video-container {
    position: relative;
    width: 100%; /* Chiếm toàn bộ chiều rộng */
    padding-bottom: 56.25%; /* Tỷ lệ khung hình 16:9 */
    height: 0;
    overflow: hidden;
}

.video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.movie-info {
    display: flex; /* Sử dụng Flexbox */
    max-width: 100%;
    margin: 20px auto;
    padding: 0px;
    color: white;
    gap: 40px;
}

.left-column {
    flex: 1; /* Chia đều không gian */
    padding: 10px; /* Khoảng cách giữa các cột */
}

.right-column {
    padding: 10px; /* Khoảng cách giữa các cột */
    margin-left: auto; /* Đẩy cột bên phải sang bên phải */
}

/* Responsive Style */
@media (max-width: 768px) {
    .movie-info {
        flex-direction: column; /* Đặt các cột thành hàng */
        gap: 20px; /* Khoảng cách giữa các cột */
    }

    .right-column {
        margin-left: 0; /* Đặt lại margin để căn giữa */
    }
}
</style>