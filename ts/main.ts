function calcAbsolute(px: number) {
    var values = {
        "cm": 0, // centimeters, 96px / 2.54; formula: px * 0.0264583333
        "mm": 0, // millimeters, 1/10 of a cm; formula: cm / 10
        "Q": 0, // quarter-millimeters, 1/40 of a cm; formula: cm / 40
        "in": 0, // inch, 1 inch = 2.54cm = 96px; formula: cm * 2.54
        "pc": 0, // picas, 1/6 of an inch; formula: inch / 6
        "pt": 0, // point, 1/72 of an inch; formula: inch / 72
        "px": px, // pixels, given by the function
    };
    values["cm"] = values["px"] * 0.0264583333;
    values["mm"] = values["cm"] / 10;
    values["Q"] = values["cm"] / 40;
    values["in"] = values["cm"] * 2.54;
    values["pc"] = values["in"] / 6;
    values["pt"] = values["in"] / 72;
    return values;
}

function calcRelative(px: number) {
    // assumes that viewport width/length are the input
    // will just calculate viewport width and assign that to the rest, no point re-calculating for each since they'd be the same
    var values = {
        "vw": 0, // 1% of viewport width; formula: px * 0.01
        "vh": 0, // 1% of viewport height
        "vmin": 0, // 1% of viewport's smaller dimension
        "vmax": 0, // 1% of viewport's bigger dimension
        "px": px,
    };
    values["vw"] = values["px"] * 0.01;
    values["vh"] = values["vw"];
    values["vmin"] = values["vw"];
    values["vmax"] = values["vw"];
    return values;
}
