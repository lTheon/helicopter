function BlackHawk() {
    var loader = new THREE.ColladaLoader();
    var innerCont = new THREE.Object3D(), outerCont = new THREE.Object3D();
    var main_rotor, rear_rotor;
    loader.load("models/Black.xml",
        function (collada) {
            innerCont = collada.scene;

            main_rotor = innerCont.getObjectByName("main_rotor");
            rear_rotor = innerCont.getObjectByName("rear_rotor");
            innerCont.traverse(function (child) {

                if (child instanceof THREE.Mesh) {
                        child.material = new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture("models/tex/fuselage.jpg") });
                }

            });   //kolorki
            innerCont.rotation.y += Math.PI / 2;
            outerCont.add(innerCont);
            //wyskaluj model
            innerCont.scale.set(10, 10, 10);
            innerCont.position.set(0, 40, 0);

        },
        // progress ładowania
        function (e) {
            //można pokazać model dopiero jak się załaduje
            //ale obliczenia działają poprawnie 
            //tylko podczas ładowania przez serwer a najlepiej
            //nie z localhosta

            console.log(e.loaded)
            console.log(e.total)


        }
    )
    this.getHeli = function () {       
        return outerCont;
    }
    this.update = function () {
        main_rotor.rotation.z += 0.1;
        rear_rotor.rotation.x += 0.1;       
    }
}