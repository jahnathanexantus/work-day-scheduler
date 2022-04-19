$(document).ready(function(){



// setting up the time format
var time = moment().format("MMM DO YYYY,h:mm:ss a");
$("#currentDay").text(time);
var saveBtn = $('.information')



var update = function() {
    document.getElementById('currentDay').innerHTML = moment().format("MMM Do YYYY, h:mm:ss a");

};
setInterval(update, 1000);

$('.saveBtn').on("click", function() {
    console.log(this);
    let value = $(this).siblings('.information').val()
    let time = $(this).parent().attr('id');
    
    localStorage.setItem(time, value);
});


function colorUpdater() {
    var currentHour = moment().hours();
    console.log(currentHour);
    $('.time-block').each(function() {
    let blockTime = parseInt($(this).attr('id').split('-')[1]);
    if(currentHour < blockTime) {
        $(this).addClass('past')
    } else if(currentHour === blockTime) {
        $(this).addClass('present')
    }else{
    $(this).addClass('future')
    }
    });
    }
    colorUpdater();
    
    $('#hour-9 .information').val(localStorage.getItem('hour-9'))
    $('#hour-10 .information').val(localStorage.getItem('hour-10'))
    $('#hour-11 .information').val(localStorage.getItem('hour-11'))
    $('#hour-12 .information').val(localStorage.getItem('hour-12'))
    $('#hour-13 .information').val(localStorage.getItem('hour-13'))
    $('#hour-14 .information').val(localStorage.getItem('hour-14'))
    $('#hour-15 .information').val(localStorage.getItem('hour-15'))
    $('#hour-16 .information').val(localStorage.getItem('hour-16'))
    $('#hour-17 .information').val(localStorage.getItem('hour-17'))

})