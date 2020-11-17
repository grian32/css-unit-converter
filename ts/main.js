function calcAbsolute(px) {
    var values = {
        "cm": 0,
        "mm": 0,
        "Q": 0,
        "in": 0,
        "pc": 0,
        "pt": 0,
        "px": px
    };
    values["cm"] = values["px"] * 0.0264583333;
    values["mm"] = values["cm"] / 10;
    values["Q"] = values["cm"] / 40;
    values["in"] = values["cm"] * 2.54;
    values["pc"] = values["in"] / 6;
    values["pt"] = values["in"] / 72;
    return values;
}
function calcRelative(px) {
    // assumes that viewport width/length are the input
    // will just calculate viewport width and assign that to the rest, no point re-calculating for each since they'd be the same
    var values = {
        "vw": 0,
        "vh": 0,
        "vmin": 0,
        "vmax": 0,
        "px": px
    };
    values["vw"] = values["px"] * 0.01;
    values["vh"] = values["vw"];
    values["vmin"] = values["vw"];
    values["vmax"] = values["vw"];
    return values;
}
