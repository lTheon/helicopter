function Sliders() {
    //----------------------SUWAKI-----------------------
    //*************BOTTOM
    var divbottom = $("<div>");
    divbottom.css("position", "absolute")
        .css("top", "90%")
        .css("width", "90vw")
        .css("height", "5vh")
        .css("left", (window.innerWidth - window.innerWidth * 9 / 10) / 2)
        .css("background", "rgba(255,255,255,0.5)");
    $("#body").append(divbottom);
    var innerBottomMovable = $("<div>");
    innerBottomMovable.css("width", "5vh")
        .css("background", "rgb(255,255,255)")
        .css("height", "5vh")
        .css("position", "relative")
        .css("left", "0px")
        .css("margin", "0 auto")
        .css("z-index", "2")
        .mousedown(function (event) {
            var currentDiv = $(this);
            var currentLeft = parseInt(currentDiv.css("left").split("p")[0]);
            var currentX = event.pageX;
            $(window).on("mousemove", function (event) {
                console.log(divbottom.offset().left);
                if (divbottom.offset().left < currentLeft + event.pageX - currentX + window.innerWidth / 2 - window.innerHeight / 40 &&
                    divbottom.offset().left + parseInt(divbottom.css("width").split("p")[0]) > currentLeft + event.pageX -
                    currentX + window.innerWidth / 2 + window.innerHeight / 40) {

                    $(currentDiv).css("left", currentLeft + event.pageX - currentX + "px");
                }
            })
            $(window).on("mouseup", function () {
                $(window).off("mousemove");
                $(window).off("mouseup");
            })
        })
    divbottom.append(innerBottomMovable);
    var innerBottomSelfMoving = $("<div>");
    innerBottomSelfMoving.css("width", "5vh")
        .attr("id", "bottomRange")
        .css("background", "rgba(255,0,0, 0.7)")
        .css("height", "5vh")
        .css("left", "0px")
        .css("position", "relative")
        .css("margin", "0 auto")
        .css("bottom", "5vh")
    divbottom.append(innerBottomSelfMoving);
    //***************LEFT  
    var divleft = $("<div>");
    divleft.css("position", "absolute")
        .css("width", "5vh")
        .css("height", "90vh")
        .css("left", "1vw")
        .css("top", "5vh")
        .css("background", "rgba(255,255,255,0.5)");
    $("#body").append(divleft);
    var innerLeftMovable = $("<div>");
    innerLeftMovable.css("width", "5vh")
        .css("background", "rgb(255,255,255)")
        .css("height", "5vh")
        .css("position", "relative")
        .css("top", "85vh")
        .css("z-index", "2")
        .mousedown(function (event) {
            var currentDiv = $(this);
            var currentTop = parseInt(currentDiv.css("top").split("p")[0]);
            var currentY = event.pageY;
            $(window).on("mousemove", function (event) {
                console.log(divleft.offset().top);
                if (divleft.offset().top < currentTop + event.pageY - currentY + divleft.offset().top &&
                    divleft.offset().top + parseInt(divleft.css("height").split("p")[0]) > currentTop + event.pageY -
                    currentY + divleft.offset().top + innerHeight / 20) {

                    $(currentDiv).css("top", currentTop + event.pageY - currentY + "px");
                }
            })
            $(window).on("mouseup", function () {
                $(window).off("mousemove");
                $(window).off("mouseup");
            })
        })
    divleft.append(innerLeftMovable);
    var innerLeftSelfMoving = $("<div>");
    innerLeftSelfMoving.css("width", "5vh")
        .css("background", "rgba(255,0,0, 0.7)")
        .css("height", "5vh")
        .attr("id", "leftRange")
        .css("top", "80vh")
        .css("position", "relative")
    divleft.append(innerLeftSelfMoving);
    //****************RIGHT
    var divright = $("<div>");
    divright.css("position", "absolute")
        .css("width", "5vh")
        .css("height", "90vh")
        .css("right", "1vw")
        .css("top", "5vh")
        .css("background", "rgba(255,255,255,0.5)");
    $("#body").append(divright);
    var innerRightMovable = $("<div>");
    innerRightMovable.css("width", "5vh")
        .css("background", "rgb(255,255,255)")
        .css("height", "5vh")
        .css("position", "relative")
        .css("top", "42.5vh")
        .css("z-index", "2")
        .mousedown(function (event) {
            var currentDiv = $(this);
            var currentTop = parseInt(currentDiv.css("top").split("p")[0]);
            var currentY = event.pageY;
            $(window).on("mousemove", function (event) {
                console.log(divright.offset().top);
                if (divright.offset().top < currentTop + event.pageY - currentY + divright.offset().top &&
                    divright.offset().top + parseInt(divright.css("height").split("p")[0]) > currentTop + event.pageY -
                    currentY + divright.offset().top + innerHeight / 20) {

                    $(currentDiv).css("top", currentTop + event.pageY - currentY + "px");
                }
            })
            $(window).on("mouseup", function () {
                $(window).off("mousemove");
                $(window).off("mouseup");
            })
        })
    divright.append(innerRightMovable);
    var innerRightSelfMoving = $("<div>");
    innerRightSelfMoving.css("width", "5vh")
        .css("background", "rgba(255,0,0, 0.7)")
        .css("height", "5vh")
        .attr("id", "rightRange")
        .css("top", "37.5vh")
        .css("position", "relative")
    divright.append(innerRightSelfMoving);
    //******************UPDATE
    this.updateRange=function () {
        if (innerBottomMovable.offset().left < innerBottomSelfMoving.offset().left)
            innerBottomSelfMoving.css("left", parseInt(innerBottomSelfMoving.css("left").split("p")[0]) - 1 + "px");
        if (innerBottomMovable.offset().left > innerBottomSelfMoving.offset().left)
            innerBottomSelfMoving.css("left", parseInt(innerBottomSelfMoving.css("left").split("p")[0]) + 1 + "px");
        if (innerLeftMovable.offset().top < innerLeftSelfMoving.offset().top)
            innerLeftSelfMoving.css("top", parseInt(innerLeftSelfMoving.css("top").split("p")[0]) - 1 + "px");
        if (innerLeftMovable.offset().top > innerLeftSelfMoving.offset().top)
            innerLeftSelfMoving.css("top", parseInt(innerLeftSelfMoving.css("top").split("p")[0]) + 1 + "px");
        if (innerRightMovable.offset().top < innerRightSelfMoving.offset().top)
            innerRightSelfMoving.css("top", parseInt(innerRightSelfMoving.css("top").split("p")[0]) - 1 + "px");
        if (innerRightMovable.offset().top > innerRightSelfMoving.offset().top)
            innerRightSelfMoving.css("top", parseInt(innerRightSelfMoving.css("top").split("p")[0]) + 1 + "px");
    }
}