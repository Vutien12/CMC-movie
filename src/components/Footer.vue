<template>
    <div class="footer">
        <div class="footer-column logo">
            <img src="../assets/logo2.png" alt="Logo" />
        </div>
        <div class="footer-column">
            <h3>Về FPT Play</h3>
            <p>Giới thiệu</p>
            <p>Các gói dịch vụ</p>
            <p>Liên hệ</p>
            <p>Trung tâm hỗ trợ</p>
            <p>Thông tin</p>
        </div>
        <div class="footer-column">
            <h3>Dịch vụ</h3>
            <p>Gói DATA</p>
            <p>Quảng cáo</p>
            <p>Mua gói</p>
            <p>Bảo hành</p>
        </div>
        <div class="footer-column">
            <h3>Quy định</h3>
            <p>Điều khoản sử dụng</p>
            <p>Chính sách thanh toán</p>
            <p>Chính sách bảo mật thông tin <br> dữ liệu</p>
        </div>
        <div class="footer-column">
            <h3>19006600</h3>
            <p>Hotrofptplay@fpt.com</p>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
.footer {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    color: white;
    flex-wrap: wrap; /* Cho phép các cột xếp chồng lên nhau khi không đủ không gian */
}

.footer-column {
    flex: 1;
    margin: 0 10px;
}

.logo {
    display: flex;
    align-items: center; /* Căn giữa theo chiều dọc */
    height: 50%; /* Đảm bảo logo có chiều cao đầy đủ */
}

.logo img {
    max-width: 40%; /* Đảm bảo logo không vượt quá chiều rộng cột */
    height: auto; /* Giữ tỷ lệ vàng cho logo */
}

/* Media query cho màn hình nhỏ */
@media (max-width: 768px) {
    .footer {
        flex-direction: column; /* Xếp cột theo chiều dọc */
        align-items: center; /* Căn giữa các cột */
    }

    .footer-column {
        margin: 5px 0; /* Thêm khoảng cách giữa các cột */
        text-align: center; /* Căn giữa nội dung */
    }
    
}
</style>