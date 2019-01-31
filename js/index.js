
 var $inner = $('.inner'),
     $spin = $('#spin'),
     $reset = $('#reset'),
     $data = $('.data'),
     $mask = $('.mask'),
     maskDefault = 'Elige un numero...',
     timer = 9000;
     activity = [
      "Cuenta una situación vergonzosa o un secreto",
       "15 minutos de masajes",
       "10 minutos de dirty talk sin tocarse",
       "Salir a un lugar a bailar y dar toda la vergüenza que se pueda",
       "Rapea una narración de tu día",
       "Una noche esta semana, hacer un plan que nunca harían",
       "Cuenta los agradecimientos de la semana",
       "Te toca usar esposas",
       "Ojos vendados por 30 minutos",
       "Cuenta una historia aleatoria de tu infancia",
       "Haz un baile ridiculo ahora",
       "Pase libre de sexo oral donde sea durante 48 horas",
       "Salir a bailar antes de que termine la semana",
       "Salir a un lugar nuevo",
       "Hacer algo que ninguno de los dos haya hecho",
       "Regalar un poema esta semana",
       "Sexo en un lugar público antes del fin de semana",
       "Sexo oral en un lugar público antes del fin de semana",
       "Conocer una ciudad nueva este mes",
       "Usa un disfraz erótico en las próximas 2 semanas",
       "Haz un baile erótico ahora",
       "Grabar un video explicando la humanidad a los extraterrestres",
       "Crea un nuevo gusto de helado",
       "Di lo que quieres ya mismo",
       "Vale por: elegir autendo patético para el otro",
       "Escribir parte de una canción",
       "Dar un baño al otro",
       "Hacer de estatua durante 5 min mientras el otro te toca como quiera",
       "Organiza una cita artística esta semana",
       "Elegir una receta para cocinar juntos",
       "Vale por: fantasía sexual",
       "Probar juntos un nuevo deporte",
       "Vale por: una compra en el sex shop",
       "Vale por: una noche de mucho vino",
       "Recitar un reggaeton en tono romántico",
       "Fingir una escena en publico",
       "Probar algo nuevo en la cama",
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