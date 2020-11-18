function calcAbsolute(px) {
    var values = {
        "cm": 0,
        "mm": 0,
        "Q": 0,
        "inch": 0,
        "pc": 0,
        "pt": 0,
        "px": px
    };
    values["cm"] = values["px"] * 0.0264583333;
    values["mm"] = values["cm"] / 10;
    values["Q"] = values["cm"] / 40;
    values["inch"] = values["cm"] * 2.54;
    values["pc"] = values["inch"] / 6;
    values["pt"] = values["inch"] / 72;
    // strip extra decimals
    for (var property in values) {
        values[property] = values[property].toFixed(decimalPlaces); // we don't need to cast back to number since we are displaying as a string
    }
    return values;
}
function calcRelative(px) {
    // assumes that viewport width/length are the input
    // will just calculate viewport width/length and return that
    return px * 0.01;
}
function displayResults() {
    // get pixel input, have to cast because TS
    var input = document.getElementById("input_px").value;
    // get calcs
    var resultAbsolute = calcAbsolute(Number(input));
    var resultRelative = calcRelative(Number(input));
    // assign to variables and display absolute values
    var cm = document.getElementById("output_cm");
    var mm = document.getElementById("output_mm");
    var q = document.getElementById("output_Q");
    var inch = document.getElementById("output_inch");
    var pc = document.getElementById("output_pc");
    var pt = document.getElementById("output_pt");
    cm.innerHTML = "CM: " + resultAbsolute['cm'];
    mm.innerHTML = "MM: " + resultAbsolute['mm'];
    q.innerHTML = "Q: " + resultAbsolute['Q'];
    inch.innerHTML = "INCH: " + resultAbsolute['inch'];
    pc.innerHTML = "PC: " + resultAbsolute['pc'];
    pt.innerHTML = "PT: " + resultAbsolute['pt'];
    // assign to variables and display relative values
    var vw = document.getElementById("output_vw");
    vw.innerHTML = "VIEWPORT: " + resultRelative;
}
var range = document.getElementById("decimal_places");
var numOfPlaces = document.getElementById("num_of_places");
var decimalPlaces;
// set to default values
setDecimalPlaces();
function setDecimalPlaces() {
    decimalPlaces = Number(range.value);
    numOfPlaces.textContent = range.value;
}
