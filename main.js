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

Webcam.attach('#camera');


function take_Snapshot(){
    Webcam.set(function (data_uri){
        document.getElementById("result").innerHTML = '<img id = "captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('MobileNet', modelLoaded);

function modelLoaded(){
    console.log('Model Loaded!');
}

function check(){
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResults);
}


function gotResults(error, results){
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("object_name").innerHTML=results[0].label;
    }
}