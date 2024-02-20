// Lấy ra thông tin user từ localStorage
const user = JSON.parse(localStorage.getItem("user"));
const isLoggedIn = !!user;