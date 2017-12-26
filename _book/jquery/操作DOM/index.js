
//jq写法
$(function(){
  $('#btn-check').click(function(){
          if(this.checked){
            $('input').attr('checked','checked');
          }
          else{
              $('input').removeAttr('checked');
          }
      }
  );
  $('.btn-del').click(function(){
       var inputL=$("table input:checked:not('#btn-check')");
       for(var i=0;i<inputL.length;i++){
           inputL[i].closest('tr').remove();
       }
  });

});
