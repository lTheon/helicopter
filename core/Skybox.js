function Skybox() {
   
    var faceMaterial = new THREE.MeshFaceMaterial(Materials.SkyMat);
    var boxGeometry = new THREE.CubeGeometry(10000, 10000, 10000, 1, 1, 1);
    var mesh = new THREE.Mesh(boxGeometry, faceMaterial);
    mesh.position.set(0, 4800, 0);
    this.getSkybox= function(){
        return mesh;
    }
}