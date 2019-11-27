$("#subscribe").click(function () {
	var a = $("#emailField");
	
    if (this.checked) {
        console.log("Selected");
        a.css("display", "block");
    } else {
        console.log("Not selected");
        a.css("display", "none");
    }
});

