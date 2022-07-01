// <div class="sectionContent" id="step1"></div>}



//find the step containers
var step1_contain = document.getElementById('step1');
var step2_contain = document.getElementById('step2');

//find the buttons
var step1_expand_but = document.getElementById("step1_expand")
var step1_hide_but = document.getElementById("step1_hide")
var step2_expand_but = document.getElementById("step2_expand")
var step2_hide_but = document.getElementById("step2_hide")


//set toggle functions (show / hide)

function step1_toggle() {
    console.log('step1 button pushed')
    var element = step1_contain;
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
    }

function step2_toggle() {
    console.log('step2 button pushed');
    var element = step2_contain
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
    }
    


//set event listeners

step1_expand_but.addEventListener('click', step1_toggle)
step1_hide_but.addEventListener('click', step1_toggle)

step2_expand_but.addEventListener('click', step2_toggle)
step2_hide_but.addEventListener('click', step2_toggle)
