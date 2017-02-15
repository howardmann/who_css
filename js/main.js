$(document).ready(function(){
  var $button = $('button');

  $button.on('click', function(){
    $(this).toggleClass('active');
    var $btnClosest = $(this).siblings('button');
    if ($btnClosest.hasClass('active')){
      $btnClosest.toggleClass('active');
    }
  })
});
