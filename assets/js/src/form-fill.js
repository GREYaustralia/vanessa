$('.contact').on('click', function(){
  window.location.href = 'contact-us.html'
  window.onload = function(){
    $('select option[value="enquiry"]').attr('selected', 'selected')
  }
})

$('.book').on('click', function(e){
  e.preventDefault
  window.location.href = 'contact-us.html'
  window.onload = function(){
    console.log('ready')
    $('select option[value="fleet"]').attr('selected', 'selected')
  }
})
