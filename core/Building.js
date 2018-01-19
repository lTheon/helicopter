function Building(scale1, scale2, scale3, rotation) {
    var loader = new THREE.ColladaLoader();
    var model;
    var container = new THREE.Object3D();
    loader.load(
          
          "models/house.xml",
          // gdy załadowany
          function (collada) {
              
              model = collada.scene;              
              model.traverse(function (child) {

                  if (child instanceof THREE.Mesh) {                      
                      child.material = new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture("models/house.jpg") });
                  }

              });

              container.add(model);

              //poprawki skali, położenia, obrotu
              model.scale.set(scale1, scale2, scale3);
              model.rotation.y += rotation;
              model.rotation.x-=Math.PI/2;
              model.position.set(0,0,-300)


          },
          // gdy model jest pobierany z serwera
	  //jest możliwe monitorowanie stanu jego pobierania
	  //i wykonanie jakiejś czynności dopiero po załadowaniu

          function (e) {
              console.log("model " + e.loaded +"-"+e.total)
          }
    );
    var geometry = new THREE.PlaneGeometry(10000, 10000, 100);
    var material = new THREE.MeshBasicMaterial({ color: 0x0f0f0f, side: THREE.DoubleSide });
    var plane = new THREE.Mesh(geometry, material);
    var wiregeometry = new THREE.PlaneGeometry(10000, 10000, 10);
    var wirematerial = new THREE.MeshBasicMaterial({ color: 0xFFFFFF, side: THREE.DoubleSide, wireframe:true });
    var wireplane = new THREE.Mesh(wiregeometry, wirematerial);
    wireplane.rotation.x += Math.PI / 2;
    plane.rotation.x += Math.PI / 2;
    container.add(plane);
    container.add(wireplane);
    this.getBuilding = function () {
        return container;
    }
}
