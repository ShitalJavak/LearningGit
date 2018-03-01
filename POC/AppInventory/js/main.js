//Bootstrap Tooltip
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
}); 
//Bootstrap Tooltip

//Set Content Height
function setHeight(){
	var headerHeight = $("header").outerHeight();
	//console.log(headerHeight);
	var footerHeight = $("footer").outerHeight();
	//console.log(footerHeight);
	var contentHeight = $(window).height() - (headerHeight + footerHeight + 40);
	$(".main-content").css("min-height", contentHeight);
}
$(document).ready(function(){
	setHeight();
})
$(window).resize(function(){
	setHeight();
})
//Set Content Height