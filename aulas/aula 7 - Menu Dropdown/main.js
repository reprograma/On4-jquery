$(document).ready(function() {
  $("#menu li a").mouseover(function() {
    let menu = $("#menu li a").index(this);
    $("#menu li")
      .eq(menu)
      .children("ul")
      .slideDown();
  });

  $("#menu li").mouseleave(function() {
    let menu = $("#menu li").index(this);
    $("#menu li")
      .eq(menu)
      .children("ul")
      .slideUp();
  });
});
