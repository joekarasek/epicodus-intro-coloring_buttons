$(document).ready(function() {
  $("button#redBtn").click(function() {
    $("body").removeClass();
    $("body").addClass("redBackground");
  });
  $("button#blueBtn").click(function() {
    $("body").removeClass();
    $("body").addClass("blueBackground");
  });
  $("button#greenBtn").click(function() {
    $("body").removeClass();
    $("body").addClass("greenBackground");
  });

});
