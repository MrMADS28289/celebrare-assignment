let imputImage = document.getElementById('get-file-input');
const img = document.getElementById('image');

function getImg(event) {

    const file = event.target.files[0];
    let url = window.URL.createObjectURL(file);

    modal.style.display = "block";

    img.src = url
    const cropper = new Cropper(img, {
        aspectRatio: 0,
        viewMode: 0
    });
}

imputImage?.addEventListener('change', getImg)

/*** Modal ***/
let modal = document.getElementById("crop-modal");
let close = document.getElementsByClassName("close")[0];

close.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}