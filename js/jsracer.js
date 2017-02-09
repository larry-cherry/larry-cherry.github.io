$(document).ready(function() {
  // $('#player1_strip').find('.active')
  var is_playable = true;

  $(document).on('keyup', function(event) {

    if (event.keyCode == 65 && is_playable) {
      var active = $('#player1_strip .active');
      active.removeClass();
      active.next().addClass('active');
      if ($('#player1_strip .active').hasClass('finish')) {
           console.log('player 1 wins');
           $('.gameinfo').append("<h2>Player 1 Wins</h1>")
           $('.gameinfo').append('<h3>Press Enter to reset</h3>')
           is_playable = false
      }
    }
    if (event.keyCode == 76 && is_playable) {
      var active = $('#player2_strip .active');
      active.removeClass();
      active.next().addClass('active');
      if ($('#player2_strip .active').hasClass('finish')) {
           console.log('player 2 wins');
           $('.gameinfo').append("<h2 class='end'>Player 2 Wins</h2>")
           $('gameinfo').append("<h3 class='end'>Press Enter to reset</h3>")
           is_playable = false
      }
    }
    if (event.keyCode == 13 && !is_playable) {
      $('#player1_strip .active').removeClass('active')
      $('#player1_strip td:first-child').addClass('active')
      $('#player2_strip .active').removeClass('active')
      $('#player2_strip td:first-child').addClass('active')
      $('.gameinfo h2').remove()
      $('.gameinfo h3').remove()
      is_playable = true
    }
  });
});
