// JavaScript Document

var timeoutHandle;
var prepend = "img/slider/";
var milli = 6000;
var sliderIndex = 0;

var sliderImages = document.getElementById("banner-images").getElementsByTagName("img");
var sliderProgressDivs = document.getElementById("banner-progress").getElementsByTagName("div");
var bannerDiv = document.getElementById('banner');


changeImage(sliderIndex);

function changeImage(n){
	
	if (n != null){
		sliderIndex = n;
		window.clearTimeout(timeoutHandle);
	}
	
	//changes image
	document.getElementById("slider-active").removeAttribute("id");
	sliderImages[sliderIndex].setAttribute("id", "slider-active");
	
	//changes progress
	document.getElementById("progress-active").removeAttribute("id");
	sliderProgressDivs[sliderIndex].setAttribute("id", "progress-active")
	
	sliderIndex++;
		
	if(sliderIndex >= sliderImages.length){
		sliderIndex = 0;
	}
	
	timeoutHandle = window.setTimeout(changeImage, 5000);
}




