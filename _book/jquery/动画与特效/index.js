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
       //$('.couple').slideToggle(1000);
       if($('.up').hasClass('down')){
           $('tr').hide();
           $('.less').hide();
           $('.up').removeClass('down');
           //$('.couple').slideDown(1000);
           $('.couple').fadeIn(1000);
       }
      else{
           $('tr').show();
           $('.less').show();
           $('.up').addClass('down');
           //$('.couple').slideUp(1000);
           $('.couple').fadeOut(1000);
       }
   });
   $('.less').click(function(){
        if( $('.less').html()=='简化'){
            $('tr:gt(1)').hide();
            $('.less').html('更多');
        }
        else{
            $('tr').show();
            $('.less').removeClass('more');
            $('.less').html('简化');
        }

    });

});
