function HelpScreen() {
    var help = $("<div>");
    help.css("position", "fixed")
        .css("width", "33vw")
        .css("height", "33vh")
        .css("background", "#000000")
        .css("color", "#FFFFFF")
        .css("left", "33vw")
        .css("top", "33vh")
        .css("display", "none")
        .css("border", "8px white solid")
        .attr("id", "help")
        .css("font-size", "3vh")
    var tab = $("<table>");
    var posName = ["UPPER FRONT FORWARD", "UPPER SELF TARGET", "FRONT SELF TARGET", "INSIDE FORWARD"];
    var h1 = $("<h1>");
    h1.html("Camera positions")
        .css("width", "100%")
        .css("text-align", "center")
        .css("font-size", "5vh")
        .css("margin-top", "0px")
    help.append(h1);
    for(var i=0; i<4; i++)
    {
        var row = $("<tr>");
        for (var j = 0; j < 2; j++) {
            var cell = $("<td>");
            if (j == 0) {
                cell.html(i + 1)
                    .css("width", "4vw")
                    .css("text-align", "center")
            }
            else
                cell.html(posName[i]);
            row.append(cell);
        }
        tab.append(row);

    }
    help.append(tab);

    var nextCam = $("<tr>");
    var indicators = $("<td>");
    indicators.html("Z/X")
        .css("width", "4vw")
        .css("text-align", "center")
    nextCam.append(indicators);
    var description = $("<td>");
    description.html("PREV/NEXT CAMERA");
    nextCam.append(description);
    tab.append(nextCam);
    $("#scene").append(help);
}