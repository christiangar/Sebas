
 var $inner = $('.inner'),
     $spin = $('#spin'),
     $reset = $('#reset'),
     $data = $('.data'),
     $mask = $('.mask'),
     maskDefault = 'Elige un numero...',
     timer = 9000;
     activity = [
      "Tener sexo con Sebas (0)",
       "Tener sexo con Sebas (1)",
       "Tener sexo con Sebas (2)",
       "Tener sexo con Sebas (3)",
       "Tener sexo con Sebas (4)",
       "Tener sexo con Sebas (5)",
       "Tener sexo con Sebas (6)",
       "Tener sexo con Sebas (7)",
       "Tener sexo con Sebas (8)",
       "Tener sexo con Sebas (9)",
       "Tener sexo con Sebas (10)",
       "Tener sexo con Sebas (11)",
       "Tener sexo con Sebas (12)",
       "Tener sexo con Sebas (13)",
       "Tener sexo con Sebas (14)",
       "Tener sexo con Sebas (15)",
       "Tener sexo con Sebas (16)",
       "Tener sexo con Sebas (17)",
       "Tener sexo con Sebas (18)",
       "Tener sexo con Sebas (19)",
       "Tener sexo con Sebas (20)",
       "Tener sexo con Sebas (21)",
       "Tener sexo con Sebas (22)",
       "Tener sexo con Sebas (23)",
       "Tener sexo con Sebas (24)",
       "Tener sexo con Sebas (25)",
       "Tener sexo con Sebas (26)",
       "Tener sexo con Sebas (27)",
       "Tener sexo con Sebas (28)",
       "Tener sexo con Sebas (29)",
       "Tener sexo con Sebas (30)",
       "Tener sexo con Sebas (31)",
       "Tener sexo con Sebas (32)",
       "Tener sexo con Sebas (33)",
       "Tener sexo con Sebas (34)",
       "Tener sexo con Sebas (35)",
       "Tener sexo con Sebas (36)",
     ];

var red = [32,19,21,25,34,27,36,30,23,5,16,1,14,9,18,7,12,3];

$reset.hide();

$mask.text(maskDefault);

$spin.on('click',function(){
  
  // get a random number between 0 and 36 and apply it to the nth-child selector
 var  randomNumber = Math.floor(Math.random() * 36),
      color = null;
      $inner.attr('data-spinto', randomNumber).find('li:nth-child('+ randomNumber +') input').prop('checked','checked');
      // prevent repeated clicks on the spin button by hiding it
       $(this).hide();
      // disable the reset button until the ball has stopped spinning
       $reset.addClass('disabled').prop('disabled','disabled').show();
  
      $('.placeholder').remove();
  
  
  setTimeout(function() {
      $mask.text('¿Nerviosa?');
      }, timer/2);
  
  setTimeout(function() {
      $mask.text(maskDefault);
      }, timer+500);
  
 
  
  // remove the disabled attribute when the ball has stopped
  setTimeout(function() {
    $reset.removeClass('disabled').prop('disabled','');
    
    if($.inArray(randomNumber, red) !== -1){ color = 'red'} else { color = 'black'};
    if(randomNumber == 0){color = 'green'};
    
    $('.result-number').text(randomNumber);
    $('.result-color').text(color);
    $('.result').css({'background-color': ''+color+''});
    $data.addClass('reveal');
    $inner.addClass('rest');
    
    $thisResult = '<li class="previous-result color-'+ color +'"><span class="previous-number">'+ "El plan de hoy es: " + activity[randomNumber] +'</span><span class="previous-color">';
     
    $('.previous-list').prepend($thisResult);
    VoiceRSS.speech({
      key: '5f91ffa5e2fd49cc95b1f607fa32fbe2',
      src: 'Hello, world!',
      hl: 'en-us',
      r: 0, 
      c: 'mp3',
      f: '44khz_16bit_stereo',
      ssml: false
  });
   
    
    }, timer);
  
});


$reset.on('click',function(){
  // remove the spinto data attr so the ball 'resets'
  $inner.attr('data-spinto','').removeClass('rest');
  $(this).hide();
  $spin.show();
  $data.removeClass('reveal');
});

// so you can swipe it too
// apikey: 5f91ffa5e2fd49cc95b1f607fa32fbe2
var myElement = document.getElementById('plate');
var mc = new Hammer(myElement);
mc.on("swipe", function(ev) {
  if(!$reset.hasClass('disabled')){
    if($spin.is(':visible')){
      $spin.click();  
    } else {
      $reset.click();
    }
  }  
});