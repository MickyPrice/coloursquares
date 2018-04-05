function getParamByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}


$(document).ready(function() {
  var randomized = getParamByName("randomized");
  var colourmode = getParamByName("mode");
  var height = getParamByName("height");
  var width = getParamByName("width");
  if (getParamByName("mode") !== null) {
    $('.button-colour').val("select");
    $('.input-colourlist-con').show();
    $('.input-colourlist').val(getParamByName("mode"));
  }
  if (randomized == "true") {
    randomize();
  }
  if (getParamByName("height") !== null) {
    $('.boxsize-height').val(getParamByName("height"));
    $('.square').css( "height", getParamByName("height") )
  }
  if (getParamByName("width") !== null) {
    $('.boxsize-width').val(getParamByName("width"));
    $('.square').css( "width", getParamByName("width") )
  }
});

function randomize() {
  $( ".square" ).each(function( index ) {

    var value = $('.button-colour').val();

    if (value == "random") {
      var colour1 = Math.floor(Math.random() * 255);
      var colour2 = Math.floor(Math.random() * 255);
      var colour3 = Math.floor(Math.random() * 255);
      var colour4 = colour3 + "," + colour2 + "," + colour1;
      var colour = "rgb(" + colour4 + ")";
    }

    if (value == "select") {
      var selectcolourlistinput = $('.input-colourlist').val();
      var selectcolours = selectcolourlistinput.split(',');
      var colour = selectcolours[Math.floor(Math.random() * selectcolours.length)];

    }

    $( this ).css( "background-color", colour );

  });
}


$( ".makeallcoloured" ).click(function() {
$( ".square" ).each(function( index ) {

  var value = $('.button-colour').val();

  var value = $('.button-colour').val();

  if (value == "random") {
    var colour1 = Math.floor(Math.random() * 255);
    var colour2 = Math.floor(Math.random() * 255);
    var colour3 = Math.floor(Math.random() * 255);
    var colour4 = colour3 + "," + colour2 + "," + colour1;
    var colour = "rgb(" + colour4 + ")";
  }

  if (value == "select") {
    var selectcolourlistinput = $('.input-colourlist').val();
    var selectcolours = selectcolourlistinput.split(',');
    var colour = selectcolours[Math.floor(Math.random() * selectcolours.length)];

  }

  $( this ).css( "background-color", colour );

});
});



$( ".button-colour" ).change(function() {
  var value = $('.button-colour').val();
  if (value == "select") {
    $('.input-colourlist-con').show();
  }else {
    $('.input-colourlist-con').hide();
  }
});



$( ".boxsize-height" ).on('input', function() {
  var boxsizeheight = $('.boxsize-height').val();
  $('.square').css( "height", boxsizeheight )
});
$( ".boxsize-width" ).on('input', function() {
  var boxsizewidth = $('.boxsize-width').val();
  $('.square').css( "width", boxsizewidth )
});






$( ".square" ).on( "mouseover", function() {

  var value = $('.button-colour').val();

  if (value == "random") {
    var colour1 = Math.floor(Math.random() * 255);
    var colour2 = Math.floor(Math.random() * 255);
    var colour3 = Math.floor(Math.random() * 255);
    var colour4 = colour3 + "," + colour2 + "," + colour1;
    var colour = "rgb(" + colour4 + ")";
  }

  if (value == "select") {
    var selectcolourlistinput = $('.input-colourlist').val();
    var selectcolours = selectcolourlistinput.split(',');
    var colour = selectcolours[Math.floor(Math.random() * selectcolours.length)];

  }

  $( this ).css( "background-color", colour );

});


$( ".togglesettings" ).click(function() {
  $('nav span .fa').toggle();
  $('.settings').fadeToggle();
});

$( ".button-reset" ).click(function() {
  $( '.square' ).css( "background-color", "" );
});




$( "#presets" ).change(function() {
  var value2 = $('#presets').val();
  $('.input-colourlist').val(value2);
});




$('.generateurl').click(function() {
  var url_height = $('.boxsize-height').val();
  var url_width = $('.boxsize-width').val();
  var url_mode = $('.input-colourlist').val();
  var url_randomized = $('.urlrandomized').val();
  if ($('.button-colour').val() == "select") {
    $('.generatedurl').val("http://mickyprice.github.io/coloursquares?width=" + url_width + "&height=" + url_height + "&mode=" + url_mode + "&randomized=" + url_randomized);
  }
  else {
    $('.generatedurl').val("http://mickyprice.github.io/coloursquares?width=" + url_width + "&height=" + url_height + "&randomized=" + url_randomized);
  }
})
