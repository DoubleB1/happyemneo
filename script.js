function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Tài khoản mẫu
  const user = "admin";
  const pass = "123";

  if (username === user && password === pass) {
    // Lưu trạng thái đăng nhập
    localStorage.setItem("loggedIn", "true");
    // Chuyển đến trang chính
    window.location.href = "index.html";
  } else {
    document.getElementById("message").innerText = "Sai tài khoản hoặc mật khẩu!";
  }
}
