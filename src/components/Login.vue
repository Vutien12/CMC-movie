<template>
    <div class="container mt-5">
        <div class="outer-frame">
            <div class="login">
                <div class="image-section">
                    <img src="../assets/bglogin.jpg" alt="Login Image" />
                </div>
                <div class="form-section">
                    <h1 class="text-center">Đăng Nhập</h1>
                    <p>Nếu bạn chưa có tài khoản, <router-link to="/sign-up">Đăng ký</router-link></p> 
                    <form @submit.prevent="Login">
                        <div class="form-group">
                            <label for="username"></label>
                            <input type="text" v-model="form.username" class="form-control" id="username" placeholder="Tên đăng nhập" ref="usernameInput">
                            <p class="msg-error" v-if="errors.username">{{ errors.username }}</p>
                        </div>

                        <div class="form-group">
                            <label for="password"></label>
                            <input type="password" v-model="form.password" class="form-control" id="password" placeholder="Mật khẩu">
                            <p class="msg-error" v-if="errors.password">{{ errors.password }}</p>
                        </div>

                        <button type="submit" class="btn btn-primary btn-block">Đăng Nhập</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Swal from 'sweetalert2';

export default {
    data() {
        return {
            form: {
                username: '',
                password: '',
            },
            errors: {}
        }
    },
    methods: {
        async Login() {
            if (this.validateUser()) {
                let userItem = {
                    username: this.form.username,
                    password: this.form.password
                };

                try {
                    // Assuming you have a result variable from your API call
                 
                    
                    if (result.status === 200) {
                        Swal.fire({
                            title: "Success!",
                            text: "Login successful!",
                            icon: "success",
                            timer: 2000
                        });
                        setTimeout(() => {
                            this.$router.push({ name: 'Home' }); // Redirect to home or dashboard
                        }, 2000);
                    }
                } catch (error) {
                    console.error(error);
                    Swal.fire({
                        title: "Error",
                        text: "Login failed!",
                        icon: "error"
                    });
                }
            }
        },
        validateUser() {
            const errors = {};

            if (!this.form.username) {
                errors.username = "Tên đăng nhập là bắt buộc!";
            }
            if (!this.form.password) {
                errors.password = "Mật khẩu là bắt buộc!";
            }

            this.errors = errors;

            // Focus on the first input if there are errors
            if (Object.keys(errors).length > 0) {
                this.$refs.usernameInput.focus();
            }

            return Object.keys(errors).length === 0;
        }
    }
}
</script>
<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.outer-frame {
    border-radius: 10px; /* Rounded corners */
    overflow: hidden; /* Prevent overflow of inner elements */
}

.login {
    display: flex;
    width: 100%; /* Take full width of the outer frame */
    max-width: 900px; /* Maximum width for the login section */
}

.login input, button {
    border-radius: 10px;
}

.image-section {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.image-section img {
    max-width: 100%;
    height: 100%; /* Maintain aspect ratio */
}

.form-section {
    flex: 1;
    padding: 20px;
    background-color: #f9f9f9;
    text-align: center;
}

.msg-error {
    color: red;
    font-size: 0.9em;
}
</style>