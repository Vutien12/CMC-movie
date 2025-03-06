<template>
    <header class="header"> 
        <div class="logo">
            <img src="@/assets/logo2.png" alt="Logo" class="logo-image" @click="goHome"/>
        </div>
        <nav class="nav"> 
            <div class="menu-icon" @click="toggleMenu">
                <i :class="isMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"></i>
            </div>
            <ul :class="{ 'active': isMenuOpen }">
                <li><a @click.prevent="goHome">Trang Chủ</a></li>
                <li><router-link class="nav-link" to="/phim-bo">Phim Bộ</router-link></li>
                <li><router-link class="nav-link" to="/phim-hanh-dong">Phim Hành Động</router-link></li>
                <li><router-link class="nav-link" to="/phim-hoat-hinh">Phim Hoạt Hình</router-link></li>
                <li><router-link class="nav-link" to="/dien-vien">Diễn viên</router-link></li>
            </ul>
            <div class="login-container">
                <button class="vip-button" @click="goToVip">
                    <i class="fa-regular fa-credit-card" style="font-size: 20px;"></i> Mua Gói
                </button>
                <button class="login-button" @click="goToLogin">
                    Đăng Nhập
                </button>
            </div>
        </nav>
    </header>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

library.add(faCircleUser);

export default {
    components: {
        FontAwesomeIcon
    },
    data() {
        return {
            userName: '',
            userId: '',
            searchQuery: '',
            isMenuOpen: false, // State for menu visibility
        }
    },
    methods: {
        goHome() {
            this.$router.push({ name: 'Home' });
        },
        goToLogin() {
            this.$router.push({ name: "Login" });
        },
        goToVip() {
            this.$router.push({ name: "Vip"});
        },
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen; // Toggle menu visibility
        },
        search() {
            console.log('Searching for:', this.searchQuery);
        }
    }
}
</script>

<style>
.header {
    display: flex;
    justify-content: space-between; /* Space between logo and nav */
    align-items: center;
    padding: 10px 20px;
    background-color: #000000;
    color: white;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}

.logo {
    display: flex;
    align-items: center;
}

.logo-image {
    height: 60px; /* Adjust height as needed */
}

.nav {
    display: flex;
    align-items: center;
    flex-grow: 1; /* Allow the nav to grow and take available space */
    justify-content: space-between; /* Space between links and login button */
}

.menu-icon {
    display: none; /* Hidden by default */
    cursor: pointer; /* Pointer for hover */
    font-size: 24px; /* Size of the hamburger icon */
    color: white; /* Color of the icon */
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    transition: max-height 0.3s ease; /* Smooth transition for dropdown */
}

li {
    margin: 0 10px; /* Space between links */
}

li a, .nav-link {
    color: white;
    text-decoration: none;
    padding: 10px 15px;
    transition: background-color 0.3s, color 0.3s; /* Smooth transition */
    border-radius: 4px; /* Rounded corners */
    font-size: 19px;
    font-weight: 400;
}

li a:hover, .nav-link:hover {
    background-color: black; /* Hover background */
    color: orangered; /* Text color on hover */
}

.login-container {
    display: flex; /* Use flex for positioning */
    align-items: center; /* Center vertically */
    margin-left: auto; /* Push the login button to the right */
}

.vip-button {
    color: white;
    border: 1px solid orangered;
    padding: 10px 15px;
    border-radius: 6px; /* Rounded corners */
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    background-color: orangered;
    margin-right: 10px;
    transition: background-color 0.3s, color 0.3s; /* Smooth transition */
}

.login-button {
    background-color: transparent;
    color: white;
    border: 1px solid white;
    padding: 10px 15px;
    border-radius: 4px; /* Rounded corners */
    font-size: 15px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s; /* Smooth transition */
}

.login-button:hover {
    background-color: black; /* Hover background */
    color: orangered; /* Text color on hover */
}

/* Responsive styles */
@media (max-width: 1150px) {
    .header {
        flex-direction: column;
        align-items: flex-start;
    }

    .nav {
        width: 100%; /* Full width for nav on smaller screens */
        justify-content: space-between; /* Maintain spacing */
    }

    .menu-icon {
        display: block; /* Show the menu icon on smaller screens */
    }

    ul {
        flex-direction: column;
        width: 100%;
        display: none; /* Hide the menu by default */
    }

    ul.active {
        display: flex; /* Show the menu when active */
        max-height: 300px; /* Set a max height for the dropdown */
        overflow: hidden; /* Hide overflow */
    }

    li {
        margin: 10px 0; /* Space between vertical links */
    }

    .login-container {
        width: 100%; /* Allow the login button to take full width */
        justify-content: flex-end; /* Align login button to the right */
    }
}

@media (max-width: 600px) {
    .header {
        padding: 10px 10px; /* Reduced padding on smaller screens */
    }

    li {
        font-size: 16px; /* Adjust font size for better readability */
    }

    .login-button {
        font-size: 14px; /* Smaller font size for the button */
    }
}
</style>