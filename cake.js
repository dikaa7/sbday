var timer = null;
function faster() {
    $(".flame").addClass("flicker flicker-faster");
    timer = setTimeout(function () {
        $(".flame").addClass("disappear");
    }, 500);
}

function slower() {
    $(".flame").removeClass("flicker-faster");
    if (timer) {
        clearTimeout(timer);
    }
}

$(function () {
    $(window).keydown(function () {
        faster();
    });
    $(".cake").mousedown(function () {
        faster();
    });
    $(window).keyup(function () {
        slower();
    });
    $(".cake").mouseup(function () {
        slower();
    });
});
