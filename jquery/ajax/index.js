$(function(){
    $('.content').load('content.html');

    $.getJSON("data.json",function(re){
        console.log(re);
    });


});
