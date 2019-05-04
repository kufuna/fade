window.onload = function(){

var a = document.querySelectorAll('.box');

function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

window.addEventListener('touchmove',function(){
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
