$(document).ready(function() {
  $("#menu li a").click(function(e) {
    e.preventDefault()
    let index = $("#menu li a").index(this);
    $("#menu li")
      .eq(index)
      .children("ul")
      .slideDown();
  });

  $("#menu li").mouseleave(function() {
    let index = $("#menu li").index(this);
    $("#menu li")
      .eq(index)
      .children("ul")
      .slideUp();
  });
});
