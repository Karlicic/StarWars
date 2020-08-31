var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function getInfo(){
    var req = new XMLHttpRequest();
    var URLhost = 'https://swapi.dev/api/films/';
    req.open('GET', URLhost, true);
    req.addEventListener('load', function () {
        if(req.status >= 200 && req.status < 400){
            var response = JSON.parse(req.responseText);
            displayMovieInfo(response);
        }
        else {
            console.log('Error in network request: ' + req.statusText);
        }});
    req.send(null);
}

function displayMovieInfo(data){

    for (i = 0; i<6; i++){
        var heading = document.getElementById('movieButton' + (i+1));
        heading.textContent = 'Title: ' + data.results[i].title;
        var text = document.getElementById('movieInfo'+ (i+1));
        text.innerText = `Release date: ${data.results[i].release_date} \n
 Director: ${data.results[i].director} \n
 Producer: ${data.results[i].producer} \n
 Opening: ${data.results[i].opening_crawl}`;
    }


}

function showPoster(num){
    let path = "images/film%23"+ num + ".jpg"
    let img = document.getElementById("img-poster");
    img.src = path;
    img.style.visibility = "visible";
}