$('[data-countdown]').each(function() {
  var $this = $(this), finalDate = $(this).data('countdown');
  $this.countdown(finalDate, function(event) {
    $this.html(event.strftime(''
    + '<div class="box"> <span>%w</span> <litter>weeks</litter></div> '
    + '<div class="box"> <span>%d</span> <litter>days</litter></div> '
    + '<div class="box"> <span>%H</span> <litter>hr</litter></div> '
    + '<div class="box"> <span>%M</span> <litter>min</litter></div> '
    + '<div class="box"> <span>%S</span> <litter>sec</litter></div>'));
  });
});

