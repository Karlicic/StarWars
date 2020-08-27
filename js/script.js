function showPoster(num){
    let path = "images/film%23"+ num + ".jpg"
    let img = document.getElementById("img-poster");
    img.src = path;
    img.style.visibility = "visible";
}
