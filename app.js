// var main = function(){
//  $(".nav").click(function(){
//  	$(this).
//  });

// }

 $(document).ready(function($) {
    $(".scroll").click(function(event) {
    event.preventDefault();
    $('html,body').animate( { scrollTop:$(this.hash).offset().top } , 1000);
    } );
  } );

 $(document).ready(function(){
    $('.thumbnail').hover(function() {
        $(this).addClass('transition');
 
    }, function() {
        $(this).removeClass('transition');
    });
  });
