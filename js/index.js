//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

	//Page behaviour

	var Width,uncollapsedHeight,collapsedHeight;
	function windowSize()
	{
		var width=window.innerWidth;
		Width=width;
		
		if(width>=784)
		{
			document.getElementById("mobileMenu").style.display="none";
			document.getElementById("nav-ul").style.visibility="visible";
		}
		else
		{
			document.getElementById("nav-ul").style.visibility="hidden";
			document.getElementById("mobileMenu").style.display="inline";

			// height of collapsed menu
			collapsedHeight=document.getElementById("nav-ul").style.height="20px";
		}
	}
	function menuHeight()
	{
		// get height of menu when not collapsed
		var height=document.getElementById("nav-ul").clientHeight;
		uncollapsedHeight=height;
	}
	function menuDisplay()
	{
		if(document.getElementById("nav-ul").clientHeight!=uncollapsedHeight)
		{
			document.getElementById("nav-ul").style.height=uncollapsedHeight+"px";
			document.getElementById("nav-ul").style.visibility="visible";
		}
		else
		{
			document.getElementById("nav-ul").style.height="20px";
			document.getElementById("nav-ul").style.visibility="hidden";
		}
	}
	function scroll()
	{
		var time=new Date();
		var currentTime=time.getTime();

		return currentTime;

		var pagePos=0;
		var pagePos=document.body.scrollTop;

		checkScrollTime();
	
	}
	function checkScrollTime()
	{
		
	}


//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	
	// for Carousel
	
	var x=0;
	function count(){x++;}
	function checkX(){if(x<=2){count();}else{x=0;}}

	// edit for number of images in carousel
	// edit individual image sources

	function background()
	{
		switch(x)
		{
			case 0:
			document.getElementById("Images").src="Images/1.jpg";
			break;
			case 1:
			document.getElementById("Images").src="Images/2.png";
			break;
			default:
			document.getElementById("Images").src="Images/0.jpeg";
			break;
		}
	}
	// edit the onload first carousel image

	function pageSetUp()
	{
		document.getElementById("Images").src="Images/0.jpeg";
	}
		
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

	//on load

	window.onload=function(){pageSetUp();setInterval(function(){checkX();background();},3000);menuHeight();windowSize();};
	window.onresize=function(){menuHeight();windowSize();};
	
	$(document).ready(function(){$("#content").click(function(){document.getElementById("nav-ul").style.visibility="hidden";document.getElementById("nav-ul").style.height="20px";});});
