function updateClock(){
    var date = new Date;
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    var time = hours + ":" + minutes + ":" + seconds;

    document.getElementById("clock").innerHTML = time;
}

setInterval(updateClock, 1000)