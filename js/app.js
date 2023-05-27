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

    /*** geting croped image ***/
    document.getElementById('crop-btn').addEventListener('click', function () {
        let cropedImg = cropper.getCroppedCanvas().toDataURL("image/png");
        modal.style.display = "none";
        modal2.style.display = "block";
        document.getElementById('use-image').src = cropedImg;

        const output = document.getElementById('output');
        document.getElementById('use-btn').addEventListener('click', function () {
            output.src = cropedImg;
            modal2.style.display = "none";
            output.style.display = "block";
        });
    });

}

imputImage?.addEventListener('change', getImg)

/*** Modal ***/
let modal = document.getElementById("crop-modal");
let modal2 = document.getElementById("frame-modal");
let close = document.getElementsByClassName("close")[0];
let close2 = document.getElementsByClassName("close2")[0];

close.onclick = function () {
    modal.style.display = "none";
}
close2.onclick = function () {
    modal2.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

let frameUrl = document.getElementById('output-frame');
const frame = document.getElementById('frame');
const frame1 = document.getElementById('frame1');
const frame2 = document.getElementById('frame2');
const frame3 = document.getElementById('frame3');
const frame4 = document.getElementById('frame4');

frame.addEventListener('click', function () {
    frameUrl.src = '';
    frame.style.backgroundColor = 'green';
});
frame1.addEventListener('click', function () {
    frameUrl.src = './asset/user_image_frame_1.png';
    frame1.style.backgroundColor = 'green';
    frame1.style.display = 'block';
});
frame2.addEventListener('click', function () {
    frameUrl.src = './asset/user_image_frame_2.png';
    frame2.style.backgroundColor = 'green';
    frame2.style.display = 'block';
});
frame3.addEventListener('click', function () {
    frameUrl.src = './asset/user_image_frame_3.png';
    frame3.style.backgroundColor = 'green';
    frame3.style.display = 'block';
});
frame4.addEventListener('click', function () {
    frameUrl.src = './asset/user_image_frame_4.png';
    frame4.style.backgroundColor = 'green';
    frame1.style.display = 'block';
});