$(document).ready( function() {	
	//Псеудочекбокс
    $(document).on("click", ".pseudo-check", function () {
		var el = $(this);
        var check = "n";
        if(el.find(".pseudo-check__real").prop("checked"))
            var check = "y";
        
        if(check == "n") {
            el.addClass("check");
            el.find(".pseudo-check__real").prop("checked","true");
        }
        if(check == "y") {
            el.removeClass("check");
            el.find(".pseudo-check__real").prop("checked","");
        }
    });
	
	$(document).on("click", ".js-download-close", function () {
		var wrap = $(this).closest(".download");
		wrap.fadeOut(400, function() {
			wrap.remove();
		});
		return false;
	});
});