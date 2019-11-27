$("#ch4form").submit(function(){
    var input = true;

    if ($("#fullname").val().length == 0){
        $("#nameerrormsg").css("display", "block");
        input = false;
    }
    else {
        $("#nameerrormsg").css("display", "none");
    }

    if ($("#streetaddr").val().length == 0){
        $("#addrerrormsg").css("display", "block");
        input = false;
    }
    else {
        $("#addrerrormsg").css("display", "none");
    }

    return input;
})