$(document).ready(function() {
	$("#suscribir").click(function(event) {
		event.preventDefault()
		$(".overlay").addClass('overlay-block')
		$(".cnt-suscribirse").addClass('cnt-suscribirse-block')
	});
	$(".cerrar-suscribirse").click(function(event) {
		/* Act on the event */
		$(".overlay").removeClass('overlay-block')
		$(".cnt-suscribirse").removeClass('cnt-suscribirse-block')
	});
});
