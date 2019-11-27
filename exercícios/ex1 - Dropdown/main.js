$(document).ready(function() {
  $("#menu li a").mouseover(function() {
    var index = $("#menu li a").index(this);
    $("#menu li")
      .eq(index)
      .children("ul")
      .slideDown();

    if (
      $(this)
        .siblings("ul")
        .size() > 0
    ) {
      return false;
    }
  });

  $("#menu li").mouseleave(function() {
    var index = $("#menu li").index(this);
    $("#menu li")
      .eq(index)
      .children("ul")
      .slideUp();
  });
});
