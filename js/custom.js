$(function() {
  setInterval(function(){ 
    $('li.chapter').off();
    $('li.chapter').on('click',function(){
      $(this).addClass('myclass1');
      $(this).parent().addClass('myclass2');
    });
  }, 1000);
  
  $('li.chapter')

});





