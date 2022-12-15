$(function() 
{
	 $("#infoBox")
	.css( 
	{
	   "background":"rgba(255,255,255, 1)",
	   "font-size":"12px",
    	"font-family": "'Helvetica Neue', Helvetica, Arial, sans-serif"
	})
	.dialog({ 
		width:600,
		height: 600,
		autoOpen: false, 
		show: { effect: 'fade', duration: 500 },
		hide: { effect: 'fade', duration: 500 } 
	});
	
	 $("#infoButton")
       .text("") // sets text to empty
	.css(
	{ "z-index":"2",
	  "background":"rgba(0,0,0,0)", 
	  "border":"0px solid #000000",
	  // "opacity":"0.9", 
	  "position":"absolute", "top":"4px", "left":"4px"
	}) // adds CSS
    .append("<img width='32' height='32' src='./images/info-icon.png'/>")
    .button()
	.click( 
		function() 
		{ 
			$("#infoBox").dialog("open");
		});
});