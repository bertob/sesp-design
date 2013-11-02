$(document).ready(function() {
    $("thingToClick").event(function() {
        $(thingToAffect).effect();
        $('#div a').after('<p>html element to add</p>');

    });
});
