
$(document).ready(function(){

	$("#navtoggle").click(function(){
	  $("#nav").slideToggle();
	});

	$("#example-title").click(function(){
	  $("#example-container").slideToggle();
	});

	$("#craigslist-title").click(function(){
	  $("#craigslist-container").slideToggle();
	});

	$("#example2-title").click(function(){
	  $("#example2-container").slideToggle();
	});

	$(".icon3").hover(function(){
	  $(this).css("opacity","0.4");
	  },function(){
  $(".icon3").css("opacity","1");
	});


	 var t = setInterval(function(){
        $("#example ul").animate({marginLeft:-700},1000,function(){
            $(this).find("li:last").after($(this).find("li:first"));
            $(this).css({marginLeft:0});
        })
    },3000);

});