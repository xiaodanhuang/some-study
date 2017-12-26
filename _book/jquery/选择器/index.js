//js写法
/*window.onload=function(){
    var obj=document.getElementsByTagName('tr');
    for(var i=0;i<obj.length;i++){
        if(i%2){
           obj[i].style.backgroundColor='pink';
        }
    }

}*/
//jq写法
$(function(){
   $('.up').click(function(){
       if($('.up').hasClass('down')){
           $('tr').css('display','none');
           $('.less').css('display','none');
           $('.up').removeClass('down');
       }
      else{
           $('tr').css('display','block');
           $('.less').css('display','block');
           $('.up').addClass('down');
       }
   });
    $('.less').click(function(){
        if( $('.less').html()=='简化'){
            $('tr:gt(1)').css('display','none');
            $('.less').html('更多');
        }
        else{
            $('tr').css('display','block');
            $('.less').removeClass('more');
            $('.less').html('简化');
        }

    });

});
