$(function(){

	// Проверяем наличие хотя бы одной задачи, 
	// если да убирает empty-item.
	function emptyTask(){
		if ($('div').is('.task-item') == true) {
			$('.empty-item').css('display', 'none');
		} else {
			$('.empty-item').css('display', 'block');
		}
	}

	//Нажатие на добавить задачу
	$('.confirm').click(function(){
		$('.task-item-title h3').each(function(){
			if ($(this).text() == $('input').val()) {
				// выводим ошибку о повторении задачи
				$('.attention').show();
				// обнуляем значения инпутов
				$('input').val('');
				$('textarea').val('');
				return false;
			}
		});
		 	//проверяем на инпут на пустое значение
		if ($('input').val() != '') {
			// задаем переменным элементы задачи
			var newItem = $('<div class="task-item"><div class="upblock"><div class="task-item-title"><div class="close-task-item"></div></div><div class="hide-task-item"></div></div><div class="downblock"></div></div>');
			var title = $('<h3></h3>');
			var note = $('<p></p>');
			// забираем из инпутов значения и отдаем их блоку с задачей
			title.text($('input').val());
			note.text($('textarea').val());
			// добавляем элементы задач из переменных с полученными данными
			$('.task-list').append(newItem);
			$('.task-item-title:last').prepend(title);
			$('.downblock:last').prepend(note);
			// обнуляем значения инпутов
			$('input').val('');
			$('textarea').val('');
			// скрываем ошибку о повторении задачи
			$('.attention').css('display', 'none');
			

		};

		emptyTask();

	});

	// делегированная обработка событий для еще не существующих
	// блоков, задаем события кнопке удалить задачу и свернуть задачу
	$('body').on('click', '.close-task-item', function(){
		setTimeout(emptyTask, 600); // после 600мс проверяем функцией emtyTask на наличие блоков с задачами
		$(this).parents('.task-item').remove();
	});


	$('body').on('click', '.hide-task-item', function(){
		$(this).toggleClass('rotate');
		$(this).parents('.task-item').children('.downblock').toggle('hide');
	});


});


