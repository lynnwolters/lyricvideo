// **************** //
// checkScreenSize //
// ************** //

let biggerThan = false; 

function checkScreenSize() {
    if (window.innerWidth > 480) {
        document.getElementById("check-screen-size").style.display = "flex";
        biggerThan = true;
    } else {
        document.getElementById("check-screen-size").style.display = "none";
        if (biggerThan) {
            location.reload(); 
        }
    }
}

checkScreenSize();

window.onresize = checkScreenSize;

// ********************* //
// textSectionAnimation //
// ******************* //

// ********************* //
// wordSectionAnimation //
// ******************* //