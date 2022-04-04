var daysOfTheWeek;
(function (daysOfTheWeek) {
    daysOfTheWeek["SUNDAY"] = "SUNDAY";
    daysOfTheWeek["MONDAY"] = "MONDAY";
    daysOfTheWeek["TUESDAY"] = "TUESDAY";
    daysOfTheWeek["WEDBESDAY"] = "WEDBESDAY";
    daysOfTheWeek["THURSDAY"] = "THURSDAY";
    daysOfTheWeek["FRIDAY"] = "FRIDAY";
    daysOfTheWeek["SATURDAY"] = "SATURDAY";
})(daysOfTheWeek || (daysOfTheWeek = {}));
var colorsOfRainbow;
(function (colorsOfRainbow) {
    colorsOfRainbow["RED"] = "VERMELHO";
    colorsOfRainbow["ORANGE"] = "LARANJA";
    colorsOfRainbow["YELLOW"] = "AMARELO";
    colorsOfRainbow["GREEN"] = "VERDE";
    colorsOfRainbow["BLUE"] = "AZUL";
    colorsOfRainbow["INDIGO"] = "ANIL";
    colorsOfRainbow["VIOLET"] = "VIOLETA";
})(colorsOfRainbow || (colorsOfRainbow = {}));
var actions;
(function (actions) {
    actions[actions["Save"] = 1] = "Save";
    actions[actions["Print"] = 2] = "Print";
    actions[actions["Open"] = 3] = "Open";
    actions[actions["View"] = 4] = "View";
    actions[actions["Close"] = 5] = "Close";
})(actions || (actions = {}));
console.log(actions.Save, actions['Print'], actions[3]);
