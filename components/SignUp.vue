<template>
    <div class="container mt-5">
        <div class="outer-frame">
            <div class="register">
                <div class="image-section">
                    <img src="../assets/bglogin.jpg" alt="Registration Image" />
                </div>
                <div class="form-section">
                    <h1 class="text-center">Tạo tài khoản mới</h1>
                    <p>Nếu bạn có tài khoản, <router-link to="/login">Đăng nhập</router-link></p> 
                    <form @submit.prevent="SignUp">
                        <div class="form-group">
                            <label for="name"></label>
                            <input type="text" v-model="form.name" class="form-control" id="name" placeholder="Tên hiển thị" ref="nameInput">
                            <p class="msg-error" v-if="errors.name">{{ errors.name }}</p>
                        </div>

                        <div class="form-group">
                            <label for="email"></label>
                            <input type="email" v-model="form.email" class="form-control" id="email" placeholder="Email">
                            <p class="msg-error" v-if="errors.email">{{ errors.email }}</p>
                        </div>

                        <div class="form-group">
                            <label for="password"></label>
                            <input type="password" v-model="form.password" class="form-control" id="password" placeholder="Mật khẩu">
                            <p class="msg-error" v-if="errors.password">{{ errors.password }}</p>
                        </div>

                        <button type="submit" class="btn btn-primary btn-block">Đăng Ký</button>
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
                name: '',
                email: '',
                password: '',
            },
            errors: {}
        }
    },
    methods: {
        async SignUp() {
            if (this.validateUser()) {
                let userItem = {
                    name: this.form.name,
                    email: this.form.email,
                    password: this.form.password
                };

                try {
                    // Assuming you have a result variable from your API call
                    if (result.status === 201) {
                        Swal.fire({
                            title: "Success!",
                            text: "Registration successful!",
                            icon: "success",
                            timer: 2000
                        });
                        setTimeout(() => {
                            this.$router.push({ name: 'Login' });
                        }, 2000);
                    }
                } catch (error) {
                    console.error(error);
                    Swal.fire({
                        title: "Error",
                        text: "Registration failed!",
                        icon: "error"
                    });
                }
            }
        },
        validateUser() {
            const errors = {};

            if (!this.form.name) {
                errors.name = "Name is required!";
            }
            if (!this.form.email) {
                errors.email = "Email is required!";
            } else if (!/\S+@\S+\.\S+/.test(this.form.email)) {
                errors.email = "Email is invalid!";
            }
            if (!this.form.password) {
                errors.password = "Password is required!";
            } else if (this.form.password.length < 6) {
                errors.password = "Password must be at least 6 characters long!";
            }

            this.errors = errors;

            // Focus on the first input if there are errors
            if (Object.keys(errors).length > 0) {
                this.$refs.nameInput.focus();
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

.register {
    display: flex;
    width: 100%; /* Take full width of the outer frame */
    max-width: 900px; /* Maximum width for the register section */
}
.register input, button {
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