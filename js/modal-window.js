//************ Модальные окна BEGIN *******************//
$(document).ready( function() {
	//Генерация подложки для модального окна
	$("body").prepend("<div class='modal-shadow'></div>");
	
	//Инициализация окна
	$(".modal-window").each(function() {
	  	$(this).prepend("<a href='' class='closemodal'></a>");
	  	$(this).addClass("js-window");
	    modalresizer();
	});
	
	//Открытие окна
	$(document).on("click", ".openmodal", function (e) {
		e.preventDefault();
		var btn = $(this);
		var modal_id = $(this).attr("data-id");
		openmodal(modal_id);
	});
	
	//Закрытие модального окна
	$("body").on("click", ".closemodal, .modal-shadow", function(event) {
	    $(".modal-window, .modal-shadow").animate({
			opacity: 0
		}, 500, function() {
			$(".modal-window, .modal-shadow").removeClass("js-active");
		});
		event.preventDefault();
  	});
  	
	//Функция отложенного конечного действия
	var waitForFinalEvent = (function () {
  		var timers = {};
  		return function (callback, ms, uniqueId) {
    		if (!uniqueId) {
      			uniqueId = "Don't call this twice without a uniqueId";
    		}
	    	if (timers[uniqueId]) {
	      		clearTimeout (timers[uniqueId]);
	    	}
	    	timers[uniqueId] = setTimeout(callback, ms);
  		};
	})();
	//При ресайзе окна
	$(window).resize(function () {
		waitForFinalEvent(function(){
			modalresizer();
		}, 500, "some unique string");
	});
});

//Открытие окна
function openmodal(artic) {
    modalresizer();    
  	$("#" + artic).addClass("js-active");  	
  	$("#" + artic).animate({
    	opacity: 1
  	}, 500);
  	$(".modal-shadow").addClass("js-active");
  	$(".modal-shadow").animate({
    	opacity: 0.5
  	}, 500);
}
//Делаем окно адаптивным
function modalresizer() {
    $(".modal-window").each(function() {
    	if( $(this).innerHeight() > $(window).height() ) {
        	$(this).addClass("js-window-absolut");
            var toppos = $(window).scrollTop();
            $(this).css({"top" : toppos });
        } else {
            $(this).removeClass("js-window-absolut");
	      	var getheight = $(window).height();
	      	var getmodalheight = $(this).innerHeight();
	      	var gtx = getheight - getmodalheight;
	      	gtx = gtx / 2;
            $(this).css({"top" : gtx });
        } 
    });  
}
//************ Модальные окна END *******************//