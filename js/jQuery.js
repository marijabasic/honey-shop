$(document).ready(function() {
	slideShow();
	$("#prikaziVise").hide();
	$("#btnPrikazi").click(function(){
		if($("#prikaziVise").is(":visible")) {
			$("#prikaziVise").fadeOut("2000");
			$(this).val("Prikaži više");
		} else {
			$("#prikaziVise").fadeIn("slow");
			$(this).val("Prikaži manje");
		}
	});
	

	
	$(".podlista").css({
		display: "none",
		left: "none"
	});
	$("#kategorije #kategorijeLI").hover(function() {
		$(this)
			.find("ul")
			.stop(true,true)
			.slideDown("slow");
		},
		function() {
		$(this)
			.find("ul")
			.stop(true,true)
			.fadeOut("slow");
		}
	);
	
	

});

function slideShow() {
	var trenutna=$("#slike .aktivna");
	var sledeca=trenutna.next().length ? trenutna.next() : trenutna.parent().children(":first");
	trenutna.removeClass("aktivna");
	sledeca.addClass("aktivna");
	setTimeout(slideShow, 4000);
}










