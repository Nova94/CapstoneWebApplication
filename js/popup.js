//USED FOR DIM BACKGROUND AND POP-UP BOX PROMPT


$(document).ready(function() {
	
	console.log("JQUERY IS READY");
	
	//setTimeout(openPopup,2000);
	
	$("#linkPres").click(function(e) {
	//	console.log('$("#modal-open-button").click');
		openPopup();
	});
	
	/*$("#modal-close-button").click(function(e) {
		console.log('$("#modal-close-button").click');
		closePopup();
	});*/
	
	$("#overlay-bg").click(function(e) {
		console.log('$("#overlay-bg").click');
		closePopup();
		//closePopupTwo();
		//$("#overlay-bg").fadeOut();
	});
	$(window).resize(function() {
		updatePopup();
		//updatePopupTwo();
	});
});

function openPopup() {
	$("#linkPres").prop("disabled", true);
	$('#overlay-bg')
    .css('background-color', '')
    .css('background-color', '#000');
	$('.inPopDiv')
    .css('width', '')
    .css('width', '100%');
	$("#popup-content").fadeIn();
	$("#overlay-bg").fadeIn();
	//$("#blur").fadeIn();
	
	updatePopup();
}

function closePopup() {
	$("#modal-open-button").prop("disabled", false);
	//$("#modal-open-button").fadeIn();
	$("#popup-content").fadeOut();
	$("#overlay-bg").fadeOut();
	//$("#blur").fadeOut();
}

function updatePopup() {
	var $popupContent = $("#popup-content");
	var top = "120px";
	//var top = ($(window).height() - $popupContent.outerHeight()) / 2;
	var left = ($(window).width() - $popupContent.outerWidth()) / 2;
	
	$popupContent.css({
		'top' : top,
		'left' : left
	});
	
}

