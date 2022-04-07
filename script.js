// setting up the time format
var time = moment().format("MMM DO YYYY,h:mm:ss a");
$("#currentDay").text(time);



var update = function() {
    document.getElementById('currentDay').innerHTML = moment().format("MMM Do YYYY, h:mm:ss a");

};
setInterval(update, 1000);