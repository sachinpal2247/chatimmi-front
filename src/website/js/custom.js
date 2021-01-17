$(".usTypeBlock li").click(function () {
	// $(".usTypeBlock").addClass("usSelected");
	// $(this).parent().show("slow");
	// $(".usTypeBlock li").removeClass("activeUsType");
	$('li', $(this).closest('.usTypeBlock')).not(this).toggle("slow");
	$(this).toggleClass("activeUsType");
	$("#loginForm").toggle("100");
	$("#changeUsType").show();
});


$('.lsUsTypeSec input[type="radio"]').click(function(){
    var inputValue = $(this).attr("value");
    var targetBox = $("." + inputValue);
    $(".formBox").not(targetBox).hide();
    $(targetBox).show();
});
// $(".usTypeBlock li.activeUsType").click(function () {
// 	$(".usTypeBlock").removeClass("usSelected");
// 	$(this).removeClass("activeUsType");
// 	$(".usTypeBlock li").removeAttr( 'style' );
// 	$(this).hide();
// 	$("#loginForm").hide();
// });


/**********Intel Input***********************/
// var input = document.querySelector(".phone");
// window.intlTelInput(input, {
// // any initialisation options go here
// });


 $('.bootMultiselect').multiselect({
 	nonSelectedText: 'Select Sub Category'
 });

 // Filter Sidebar toggle Function
function openNav($sliderName) {
    $('body').addClass("menuOpen");
    $('#'+$sliderName).fadeIn();
    $('.modalBackdrop').fadeIn();
}
function closeNav($sliderName) {    
    $('#'+$sliderName).fadeOut();
    $('body').removeClass("menuOpen");
    $('.modalBackdrop').fadeOut();
}