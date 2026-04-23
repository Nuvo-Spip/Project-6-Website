// Navbar button
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

// Background animation
let x = 0;
function background_animate(){
    if (x >= 20) {
        x=0;
    }
    document.body.style.backgroundImage = 'repeating-linear-gradient(45deg, #567bda '+x+'px, #6691fc '+(x+10)+'px, #8ba9f5 '+(x+10)+'px, #748ccb '+(x+20)+'px)';
    x += 0.1;
    requestAnimationFrame(background_animate)
}
background_animate();

// Game code
let score = 0;
const buttons = document.querySelectorAll(".game_button");
var last_index = -1
var index = 0

// change buttons
function randombtn(){
    buttons.forEach(btn => {
        btn.classList.remove("green");
    });
    index = Math.floor(Math.random() * 4)
    while (index === last_index) {
        index = Math.floor(Math.random() * 4)
    }
    buttons[index].classList.add("green")
    last_index = index
}
// listen for clicks
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.classList.contains("green")) {
            score += 1;
        } else {
            score -= 1;
        }
    document.getElementById("score_counter").innerText = ("Score: "+score)
    start_interval();
    });
});

// Button change speed
let lastChange;
function loop(timestamp) {
    if (!lastChange) lastChange = timestamp;
    var time_passed = timestamp - lastChange;
    var interval = Math.max(200, 1000 - score*20);
    if (time_passed >= interval) {
        randombtn();
        lastChange = timestamp;
    }
    requestAnimationFrame(loop);
}


randombtn();
requestAnimationFrame(loop);
