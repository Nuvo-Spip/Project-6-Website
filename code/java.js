var to_state = "hide";
function hide_nav(element) {
    if (to_state == "hide") {
        document.getElementById("navbar").style.display = "none";
        document.getElementById("navbutton").innerHTML = '<img id="navbutton_arrow" src="code/images/down.png">show';
        to_state = "show";
    }
    else {
        document.getElementById("navbar").style.display = "block";
        document.getElementById("navbutton").innerHTML = '<img id="navbutton_arrow" src="code/images/up.png">hide';
        to_state = "hide";
    }
}

var x = 0;
function background_animate(){
    if (x >= 20) {
        x=0;
    }
    document.body.style.backgroundImage = 'repeating-linear-gradient(45deg, #567bda '+x+'px, #6691fc '+(x+10)+'px, #8ba9f5 '+(x+10)+'px, #748ccb '+(x+20)+'px)';
    x += 0.1;
    requestAnimationFrame(background_animate)
}
background_animate();

