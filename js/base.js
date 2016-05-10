$(document).ready(function(){
	var plus = $('#operatorPlus').draggable({ revert: true });
	var minus = $('#operatorMinus').draggable({ revert: true });
	var multi = $('#operatorMulti').draggable({ revert: true });
	var minus = $('#operatorDivide').draggable({ revert: true });
	$('#drop1').droppable({
		drop: dropped
	});
})

function dropped(){
	$(this).find("img").attr("src", "./img/operator1.png");
}