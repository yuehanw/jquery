$("#ch3form").submit(function() {

    if ($("input[name='fruit']:checked").length == 0) {
        alert("You must pick a fruit!");
        return false;
    }
    
    if ($("input[name='standing']:checked").length == 0) {
        alert("You must pick a standing!");
        return false;
    }

    return true;
});