// get user's uploaded image
// const imgPath = document.querySelector('input[type=file]').files[0];
// const reader = new FileReader();

// reader.addEventListener("load", function () {
//     // convert image file to base64 string and save to localStorage
//     localStorage.setItem("image", reader.result);
// }, false);

// if (imgPath) {
//     reader.readAsDataURL(imgPath);
// }

// let img = document.getElementById('image');
// img.src = localStorage.getItem('image');

let imputImage = document.getElementById('get-file-input');
const img = document.getElementById('image')

function getImg(event) {

    const file = event.target.files[0];

    let url = window.URL.createObjectURL(file);

    console.log(url)

    img.src = url
}

imputImage?.addEventListener('change', getImg)