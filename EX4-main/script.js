/* 1. Hàm upDate: Xử lý khi di chuột/focus vào ảnh */
function upDate(previewPic) {
  // a. Kiểm tra sự kiện đã kích hoạt
  console.log("Sự kiện upDate đã được kích hoạt!");

  // b. In ra thông tin thuộc tính alt và src của hình ảnh
  console.log("Alt:", previewPic.alt);
  console.log("Src:", previewPic.src);

  // Lấy phần tử có id="image"
  let imageDiv = document.getElementById("image");

  // c. Thay đổi nội dung chữ thành giá trị alt
  imageDiv.innerHTML = previewPic.alt;

  // e. Thay đổi hình nền thành đường dẫn src của ảnh
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

/* 2. Hàm unDo: Xử lý khi rời chuột/blur khỏi ảnh */
function unDo() {
  let imageDiv = document.getElementById("image");

  // a. Khôi phục hình nền rỗng
  imageDiv.style.backgroundImage = "url('')";

  // b. Khôi phục văn bản ban đầu
  imageDiv.innerHTML = "Di chuột qua hình ảnh bên dưới để hiển thị ở đây.";
}
