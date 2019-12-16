
var staticGifSuffix = "-static.mp4";
var gifSuffix = ".mp4";

function gif_toggle(gifObj)
{
    var originalSrc = gifObj.find("img").attr("src");
    if (originalSrc.includes("static")) {
        gifObj.find("img").attr("src", originalSrc.replace(staticGifSuffix, gifSuffix));
        gifObj.find(".gifhelp").hide()
    } else {
        gifObj.find("img").attr("src", originalSrc.replace(gifSuffix, staticGifSuffix));
        gifObj.find(".gifhelp").show()
    }
}

function mp4_toggle(animateObj) {
    mp4Obj = animateObj.find(".videoGif").get(0)

    if (mp4Obj.paused) {
        mp4Obj.play();
        animateObj.find(".gifhelp").hide()
    } else {
        mp4Obj.pause();
        animateObj.find(".gifhelp").show()
    } 
    return mp4Obj
};


$(document).ready(function() {

    var gifHelp = '<div class="gifhelp">Click to play & pause.</div>';
    $(".animate").each(function (i) {
        $(this).append(gifHelp);
    });
    $(".img-animate").each(function (i) {
        $(this).click(function() {
            gif_toggle($(this));
        });
    });
    $('.animate').each(function (i) {
        $(this).click(function() {
            mp4_toggle($(this));
        });
    })
    // remove toggle from autostarted images
    $(".autostarted").each(function (i) {
        $(this).find(".gifhelp").hide();
    });
});
