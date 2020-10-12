var i = 1;

function show_panel() {
    if (i == 1) {
        document.getElementById("share__panel").classList.add("show");
        document.getElementById("share__button").classList.add("button__active");
        document.getElementById("share__button--icon").classList.add("icon__active");
        return i = 0;
    } else {
        document.getElementById("share__panel").classList.remove("show");
        document.getElementById("share__button").classList.remove("button__active");
        document.getElementById("share__button--icon").classList.remove("icon__active");
        return i = 1;
    }
}