document.addEventListener("DOMContentLoaded", function () {

    AOS.init();
    new kursor({
        type: 4
    })

    setTimeout(function () {
        let opacity = 1;
        let interval = setInterval(function () {
            if (opacity <= 0.1) {
                clearInterval(interval);
                document.querySelector(".loader").style.display = "none";
            }
            document.querySelector(".loader").style.opacity = opacity;
            document.querySelector(".loader").style.filter = "alpha(opacity=" + opacity * 100 + ")";
            opacity = opacity - opacity * 0.1;
        }, 40);
    }, 1050);
});