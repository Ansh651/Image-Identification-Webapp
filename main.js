Webcam.set({
    width:310,
    height:300,
    image_format:'jpg',
    jpg_quality: 90,

    constraint:{
        facingMode:"environment"
    }
});
Camera = document.getElementById("camera");

Webcam.attatch('#camera');
