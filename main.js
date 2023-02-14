
function dodirect(nameid) {
    var aplace = document.getElementById(nameid);
    var newicon = "img/pressed/" + nameid + ".png";
    aplace.src = newicon;
}

function leavedirect(nameid) {
    var aplace = document.getElementById(nameid);
    var newicon = "img/" + nameid + ".png";
    aplace.src = newicon;
}

function showabstract() {
    if (document.getElementById("typediv").style.display == "none") {
        document.getElementById("typediv").style.display = "block";
    } else {
        document.getElementById("typediv").style.display = "none";
    }
}

function startanimation() {
    document.getElementById("animation").style.animationPlayState = "running";
}

function stopanimation() {
    document.getElementById("animation").style.animationPlayState = "paused";
}

function dowechat() {
    alert("This is my Wechat Number: 15510602710. Please state your purpose.");
}