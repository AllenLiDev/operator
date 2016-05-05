$(document).ready(function(){
	$('#drag').draggable();
	$('#drop').droppable({
		drop: handDropEvent
	});
})