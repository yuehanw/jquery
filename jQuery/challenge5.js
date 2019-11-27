console.log("here")
var saying = "Hover over an image below."

$("img").mouseover(function () {
	$("#image").css("backgroundImage", "url('" + this.src + "')");
	$("#image").text(this.alt);
})

$("img").focus(function () {
	$("#image").css("backgroundImage", "url('" + this.src + "')");
	$("#image").text(this.alt);
})

$("img").mouseleave(function () {
	$("#image").css("backgroundImage", "url('')");
	$("#image").text(saying);
})

$("img").blur(function () {
	$("#image").css("backgroundImage", "url('')");
	$("#image").text(saying);
})