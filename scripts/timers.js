const gather_effects = null;

let character = "anabel";

/*
* calculate gathering time based on effects and create p elements for use in setGather
* baseTime in seconds
*/
function gatherSetup(baseTime) {
    let time = baseTime;

    // create elements
    const timerTitle = document.createElement("p");
    timerTitle.id = character + "_timerTitle";
    timerTitle.textContent = character;
    const timerTime = document.createElement("p");
    timerTime.id = character + "_timerTime";

    // move elements to div
    const gatherTimers = document.querySelector("div.gatherTimers");
    gatherTimers.appendChild(timerTitle);
    gatherTimers.appendChild(timerTime);

    setGather(time, timerTitle.id, timerTime.id);
}

/*
* update timer
* time in seconds
*/
function setGather(time, titleID, timerID) {
    const timerTitle = document.getElementById(titleID);
    const timerTime = document.getElementById(timerID);

    if (time <= 0) {
        timerTitle.remove();
        timerTime.remove();
        done(); // todo
    } else {
        let timetext = "";
        if (time > 3600) timetext += Math.floor(time / 3600) + "h ";
        if (time > 60) timetext += Math.floor(time / 60) + "m ";
        timetext += time % 60 + "s";
        timerTime.textContent = timetext;
        
        setTimeout(function(){setGather(time - 1, titleID, timerID)}, 1000);
    }
}

function done() {

}