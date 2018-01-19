function CockpitScreen() {
    var canvasSpeed, contextSpeed;
    //
    canvasSpeed = document.createElement("canvas");
    canvasSpeed.width = 50 // bez px;
    canvasSpeed.height = 800 // bez px;
    canvasSpeed.style.position = "absolute";
    canvasSpeed.style.left = "20vw";
    canvasSpeed.style.top = "5vh";
    canvasSpeed.style.background = "rgba(0, 0, 0, 0)";
    contextSpeed = canvasSpeed.getContext("2d");
    contextSpeed.rect(0, 0, 50, 800);
    contextSpeed.clip();

    var canvasAscend, contextAscend;
    //
    canvasAscend = document.createElement("canvas");
    canvasAscend.width = 80 // bez px;
    canvasAscend.height = 800 // bez px;
    canvasAscend.style.position = "absolute";
    canvasAscend.style.right = "20vw";
    canvasAscend.style.top = "5vh";
    canvasAscend.style.background = "rgba(0, 0, 0, 0)";
    contextAscend = canvasAscend.getContext("2d");
    contextAscend.rect(0, 0, 80, 800);
    contextAscend.clip();

    var canvasDirection, contextDirection;
    //
    canvasDirection = document.createElement("canvas");
    canvasDirection.width = 800 // bez px;
    canvasDirection.height = 80 // bez px;
    canvasDirection.style.position = "absolute";
    canvasDirection.style.right = "25vw";
    canvasDirection.style.top = "5vh";
    canvasDirection.style.background = "rgba(0, 0, 0, 0)";
    contextDirection = canvasDirection.getContext("2d");
    contextDirection.rect(0, 0, 800, 80);
    contextDirection.clip();

   
    document.getElementById("scene").appendChild(canvasSpeed);
    document.getElementById("scene").appendChild(canvasAscend);
    document.getElementById("scene").appendChild(canvasDirection);
    this.updateCockpit = function () {
        contextSpeed.clearRect(0, 0, 50, 800);
        contextAscend.clearRect(0, 0, 80, 800);
        contextDirection.clearRect(0,0,800,50)
        var speedVal=startSpeedValue-parseInt($("#leftRange").css("top").split("p")[0]);
        for (var i = 0; i < 10; i++) {
            contextSpeed.beginPath();
            contextSpeed.lineWidth = 2;
            contextSpeed.strokeStyle = "rgba(255, 255, 0, 1)";
            contextSpeed.moveTo(50, 400+speedVal - 300 * i); // początek linii
            contextSpeed.lineTo(40, 400+speedVal - 300 * i); // koniec linii
            contextSpeed.stroke();
            contextSpeed.closePath()


            contextSpeed.font = "30px arial";
            contextSpeed.fillStyle = "rgba(255, 255, 0, 1)";
            contextSpeed.fillText(i + "0", 10, 400+speedVal - 300 * i - 10);
        }

        var ascendVal = ascendValue;
        for (var i = 0; i < 100; i++) {
            contextAscend.beginPath();
            contextAscend.lineWidth = 2;
            contextAscend.strokeStyle = "rgba(255, 255, 0, 1)";
            contextAscend.moveTo(0, 400 + ascendVal - 300 * i); // początek linii
            contextAscend.lineTo(10, 400 + ascendVal - 300 * i); // koniec linii
            contextAscend.stroke();
            contextAscend.closePath()


            contextAscend.font = "30px arial";
            contextAscend.fillStyle = "rgba(255, 255, 0, 1)";
            contextAscend.fillText(i + "0", 10, 400 + ascendVal - 300 * i - 10);
        }
        
        var directionVal = directionValue;
        for (var i = -17; i < 18; i++) {
            contextDirection.beginPath();
            contextDirection.lineWidth = 2;
            contextDirection.strokeStyle = "rgba(255, 255, 0, 1)";
            contextDirection.moveTo(100 * i + 20 - directionVal, 20); // początek linii
            contextDirection.lineTo(100 * i + 20 - directionVal, 30); // koniec linii
            contextDirection.stroke();
            contextDirection.closePath()


            contextDirection.font = "30px arial";
            contextDirection.fillStyle = "rgba(255, 255, 0, 1)";
            contextDirection.fillText(i * 20, 400+100 * i - directionVal, 20);
        }


    }
}