$(document).ready(function() {
  function emptyTask() {
    if ($("div").is(".task-item") == true) {
      $(".empty-item").css("display", "none");
    } else {
      $(".empty-item").css("display", "block");
    }
  }

  $(".task-confirm").click(function() {
    if ($("input").val() !== "" && $("textarea").val() !== "") {
      $("input").removeClass("error");
      $("textarea").removeClass("error");
      var newTask = $(`
        <div class="task-item">
          <div class="task-name">
            <div class="task-item-title">
              <div class="close-task-item">
              </div>
            </div>
                <div class="hide-task-item">
                </div>
          </div>
          <div class="task-description">
          </div>
        </div>`);
      var title = $("<h3></h3>");
      var description = $("<p></p>");

      title.text($("input").val());
      description.text($("textarea").val());

      $(".task-list").append(newTask);
      $(".task-item-title:last").prepend(title);
      $(".task-description:last").prepend(description);

      $("input").val("");
      $("textarea").val("");
    } else {
      $("input").addClass("error");
      $("textarea").addClass("error");
    }

    emptyTask();
  });

  $("body").on("click", ".close-task-item", function() {
    setTimeout(emptyTask, 300);
    $(this)
      .parents(".task-item")
      .remove();
  });
  $("body").on("click", ".hide-task-item", function() {
    $(this).toggleClass("rotate");
    $(this)
      .parents(".task-item")
      .children(".task-description")
      .toggle("hide");
  });
});
