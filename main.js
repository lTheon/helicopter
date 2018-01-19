/// <reference path="jquery-1.12.1.js" />

function Main(heliChoosen) {
    //--------------------------SCENA I KAMERA------------------------
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
    45, // kąt patrzenia kamery (FOV - field of view)
    window.innerWidth / window.innerHeight, // proporcje widoku
    0.1, // min renderowana odległość
    50000 // max renderowana odległość
    );
    var renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0x0088ff);
    renderer.setSize(window.innerWidth, window.innerHeight);
    //------------------CLASSES----------------------
    var sky = new Skybox();
    scene.add(sky.getSkybox())
    if(heliChoosen==0)
        var heli = new BlackHawk();
    if (heliChoosen == 1)
        var heli = new Helikopter();
    var camPos = new CameraPosition();
    var sliders = new Sliders();
    var helpScreen = new HelpScreen();
    var cockpitScreen = new CockpitScreen();
    //------------------MODELS-----------------------  
    var axis = new THREE.AxisHelper(200);
    var pointsTable = camPos.getPoints();
    var heliContainer = new THREE.Object3D();   //obiekt z kamerą, helikopterem i wektorami kamery
    var innerHeli = heli.getHeli();
    heliContainer.add(innerHeli);
    heliContainer.add(camera);
    heliContainer.add(axis);
    for (var i = 0; i < pointsTable.length; i++)
        heliContainer.add(pointsTable[i]);
    scene.add(heliContainer);
    var building = new Building(10, 10, 10, 0);
    scene.add(building.getBuilding());
    //---------------------CAMERA---------------------------
    var cameraPos = camPos.getCamPositions();
    var currentCam=0;
    window.addEventListener("keydown", function (event) {
        var code = event.which;
        console.log(code);
        if (code == 72)
            $("#help").css("display", "block");
        if (code == 49) {
            currentCam = 0;
        }
        if (code == 50) {
            currentCam = 1;
        }
        if (code == 51) {
            currentCam = 2;
        }
        if (code == 52) {
            currentCam = 3;
        }
        if (code == 90) {
            currentCam--;
            if (currentCam < 0)
                currentCam = 3;
        }
        if (code == 88) {
            currentCam++;
            if (currentCam > 3)
                currentCam = 0;
        }
        camera.position.set(cameraPos[currentCam][0], cameraPos[currentCam][1], cameraPos[currentCam][2])
        camera.lookAt(pointsTable[currentCam].position)
    }, false)
    window.addEventListener("keyup", function (event) {
        var code = event.which;
        console.log(code);
        if (code == 72)
            $("#help").css("display", "none");
    }, false)
    camera.position.set(cameraPos[0][0], cameraPos[0][1], cameraPos[0][2]);
    camera.lookAt(pointsTable[0].position);
    //*********************UPDATE
    startSpeedValue = parseInt($("#leftRange").css("top").split("p")[0]);
    startAscendValue = parseInt($("#rightRange").css("top").split("p")[0]);
    ascendValue = heliContainer.position.y;
    directionValue = heliContainer.rotation.y*180/Math.PI;
    function updatePos() {
        heliContainer.rotation.y += parseInt($("#bottomRange").css("left").split("p")[0]) / 50000;
        heliContainer.translateX((startSpeedValue - parseInt($("#leftRange").css("top").split("p")[0])) / 100)
        heliContainer.translateY((startAscendValue - parseInt($("#rightRange").css("top").split("p")[0])) / 100)
    }
    //---------------------ANIMATE--------------------------     
    document.getElementById("scene").appendChild(renderer.domElement);
    function animateScene() {
        requestAnimationFrame(animateScene);
        renderer.render(scene, camera);
        camera.updateProjectionMatrix();
        heli.update();
        sliders.updateRange();
        updatePos();
        cockpitScreen.updateCockpit();
        ascendValue = heliContainer.position.y;
        directionValue = heliContainer.rotation.y * 180 / Math.PI;
        console.log(directionValue);
    }
    animateScene();
}