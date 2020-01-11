$(function() {
  function emptyTask() {
    if ($("div").is(".task-item") == true) {
      $(".empty-item").css("display", "none");
    } else {
      $(".empty-item").css("display", "block");
    }
  }

  $(".confirm").click(function() {
    $(".task-item-title h3").each(function() {
      if ($(this).text() == $("input").val()) {
        $("input").val("");
        $("textarea").val("");
        return false;
      }
    });

    if ($("input").val() != "") {
      var newItem = $(
        '<div class="task-item"><div class="upblock"><div class="task-item-title"><div class="close-task-item"></div></div><div class="hide-task-item"></div></div><div class="downblock"></div></div>'
      );
      var title = $("<h3></h3>");
      var note = $("<p></p>");

      title.text($("input").val());
      note.text($("textarea").val());

      $(".task-list").append(newItem);
      $(".task-item-title:last").prepend(title);
      $(".downblock:last").prepend(note);

      $("input").val("");
      $("textarea").val("");
    }

    emptyTask();
  });

  $("body").on("click", ".close-task-item", function() {
    setTimeout(emptyTask, 600);
    $(this)
      .parents(".task-item")
      .remove();
  });
});
