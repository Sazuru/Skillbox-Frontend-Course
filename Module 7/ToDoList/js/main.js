$(document).ready(function() {
  function emptyTask() {
    if ($("div").is(".task-item") == true) {
      $(".empty-item").css("display", "none");
    } else {
      $(".empty-item").css("display", "block");
    }
  }

  $(".task-confirm").click(function() {
    $(".task-item-title h3").each(function() {
      if ($(this).text() == $("#task-item__name").val()) {
        // выводим ошибку о повторении задачи
        $(".attention").show();
        // обнуляем значения инпутов
        $("#task-item__name").val("");
        $("#task-item__description").val("");
        return false;
      }
    });
    if ($("#task-item__name").val() !== "" && $("#task-item__description").val() !== "") {
      $("#task-item__name").removeClass("error");
      $("#task-item__description").removeClass("error");
      $(".attention").hide();
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

      title.text($("#task-item__name").val());
      description.text($("#task-item__description").val());

      $(".task-list").append(newTask);
      $(".task-item-title:last").prepend(title);
      $(".task-description:last").prepend(description);

      $("#task-item__name").val("");
      $("#task-item__description").val("");
    } else {
      $("#task-item__name").addClass("error");
      $("#task-item__description").addClass("error");
    }

    emptyTask();
  });
  //удаление задачи
  $("body").on("click", ".close-task-item", function() {
    setTimeout(emptyTask, 300);
    $(this)
      .parents(".task-item")
      .remove();
  });
  //скрытие задачи
  $("body").on("click", ".hide-task-item", function() {
    $(this).toggleClass("rotate");
    $(this)
      .parents(".task-item")
      .children(".task-description")
      .toggle("hide");
  });
});
