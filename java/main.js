$(document).ready(function(){
   
$('.nav-item a').click(function(e){
    e.preventDefault();
    $('.nav-item a').removeClass('active')
    $(this).addClass('active')
});

$('.nav-link').on('click', function() { 
  var navTitle = $(this).text(); 
  console.log(navTitle)
  $('.show-name').text(navTitle); 
}); 
})