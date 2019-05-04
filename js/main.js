window.onload = function(){
var mobileDetect = (navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)) ? true : false ;
var a = document.querySelectorAll('.box');
var evt;
mobileDetect ? evt = 'touchmove' : evt = 'scroll';
function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

window.addEventListener(evt,function(){
	for (var i = 0; i < a.length; i++) {
		if (window.scrollY > offset(a[i]).top) {
			var differance = window.scrollY - offset(a[i]).top;
			var percentage = differance / a[i].clientHeight;
			console.log(percentage)
			a[i].style.opacity = percentage
		}
	}
})


}
