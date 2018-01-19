function BlackHawk_StartScreen() {
    var loader = new THREE.ColladaLoader();
    var innerCont = new THREE.Object3D(), outerCont = new THREE.Object3D();
    var mat = new THREE.MeshPhongMaterial({
        //color: 0xff0000,
        map: THREE.ImageUtils.loadTexture("models/tex/fuselage.jpg"),
        shininess: 1000
    });
    loader.load("models/Black.xml",
        function (collada) {
            innerCont = collada.scene;
            innerCont.traverse(function (child) {

                if (child instanceof THREE.Mesh) {
                    child.material = mat;
                    mat.needsUpdate = true;
                }

            });
            innerCont.rotation.y += Math.PI / 2;
            outerCont.add(innerCont);
            innerCont.scale.set(10, 10, 10);
            innerCont.position.set(0, 40, 0);
        },
        function (e) {
            console.log(e.loaded)
            console.log(e.total)


        }
    )
    this.getHeli = function () {
        return outerCont;
    }
}