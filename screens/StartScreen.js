function StartScreen() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
    45, // kąt patrzenia kamery (FOV - field of view)
    window.innerWidth / window.innerHeight, // proporcje widoku
    0.1, // min renderowana odległość
    50000 // max renderowana odległość
    );
    var renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0x000000);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.set(-400, 200, 0);
    document.getElementById("start").appendChild(renderer.domElement);
    var point = new THREE.Object3D();
    point.position.set(0, 50, 0);
    camera.lookAt(point.position);


    var light = new THREE.SpotLight(0xFFFFFF, 2, 2000, 15);
    light.position.set(0, 200, 0);
    light.lookAt(point.position);
    scene.add(light)

    var slide = new THREE.Object3D();

    var blackhawk = new BlackHawk_StartScreen();
    var hawk = blackhawk.getHeli();
    hawk.rotation.y += Math.PI;
    slide.add(hawk);

    var custom = new Helikopter_StartScreen();
    var cust = custom.getHeli();
    cust.rotation.y += Math.PI / 2;
    cust.position.y += 40;
    cust.position.z += 300;
    slide.add(cust);

    scene.add(slide);
    var plainGeometry = new THREE.PlaneGeometry(500, 500, 1);
    var plainMaterial = new THREE.MeshPhongMaterial({ color: 0xFFFF00, side: THREE.DoubleSide });
    var plain = new THREE.Mesh(plainGeometry, plainMaterial);
    plain.rotation.x += Math.PI / 2;
    scene.add(plain);
    var scrollVal = 0;
    var currentScrollVal = 0;
    var heliCount = 1;  //liczone od 0
    var currentHeli = 0;

    var breakAnimation = false;
    function animateScene() {
        console.log(currentHeli);
        if (breakAnimation)
            return;
        requestAnimationFrame(animateScene);
        renderer.render(scene, camera);
        camera.updateProjectionMatrix();



        if (scrollVal > currentScrollVal) {
            if (currentScrollVal == 150) {
                scrollVal = -heliCount * 300;
                currentScrollVal = -150 - heliCount * 300;
                slide.position.z = -150 - heliCount * 300;
            }
            slide.position.z += 5;
            currentScrollVal += 5
            if (scrollVal == currentScrollVal)
                currentHeli--;
        }
        if (scrollVal < currentScrollVal) {
            if (currentScrollVal == heliCount * -300 - 150) {
                currentScrollVal = 150;
                slide.position.z = 150;
                scrollVal = 0;
            }
            slide.position.z -= 5
            currentScrollVal -= 5
            if(scrollVal==currentScrollVal)
                currentHeli++;
        }


        if (currentHeli < 0)
            currentHeli = heliCount;
        if (currentHeli > heliCount)
            currentHeli = 0;
    }
    animateScene();
    
    //---------------------BUTTONY
    var start = $("<div>");
    $(start).html("Start")
        .css("color", "white")
        .css("font-size", "5vh")
        .css("width", "20vw")
        .css("height", "6vh")
        .css("left", "40vw")
        .css("top", "10vh")
        .css("text-align", "center")
        .css("display", "block")
        .css("position", "fixed")
        .click(function () {
            $("#start").remove();
            breakAnimation = true;
            main = new Main(currentHeli);
        })
    $("#start").append(start);

    var scrollLeft = $("<div>");
    $(scrollLeft).html("<")
        .css("color", "white")
        .css("font-size", "15vh")
        .css("width", "20vw")
        .css("height", "15vh")
        .css("left", "22vw")
        .css("top", "42.5vh")
        .css("text-align", "center")
        .css("display", "block")
        .css("position", "fixed")
        .click(function () {
            if(currentScrollVal==scrollVal)
                scrollVal -= 300;
        })
    $("#start").append(scrollLeft);
    var scrollRight = $("<div>");
    $(scrollRight).html(">")
        .css("color", "white")
        .css("font-size", "15vh")
        .css("width", "20vw")
        .css("height", "15vh")
        .css("right", "22vw")
        .css("top", "42.5vh")
        .css("text-align", "center")
        .css("display", "block")
        .css("position", "fixed")
        .click(function () {
            if (currentScrollVal == scrollVal)
                scrollVal += 300;
        })
    $("#start").append(scrollRight);
}