//Adding strike-through function
$(document).ready(function(){
//Adding strike-through function
	$('ul').on("click","li",function(){

		//alert("working properly");
		$(this).toggleClass("greenStrike");
	});

//add function to delete icon
$("ul").on("click","span",function(event){


$(this).parent().fadeOut(300,function(){
	$(this).remove();
})
event.stopPropagation();
});
//Add new task when something is written
$("input").keypress(function(event){
	if(event.which === 13){
		var task= $('input').val();
		$('ul').append("<li><span class='delete'><i class='fa fa-trash' aria-hidden='true'></i></span><b>"+ task +"</b></li>");
		$('input').val("");
	}
});

//toggle add button
$("#plus").click(function(){
	$("input").slideToggle(100);
	$("#container").slideToggle(100);
})


});



