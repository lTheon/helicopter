//klasa statyczna
function Materials() {
    //tutaj ma być pusto
}

//

Materials.SkyMat = [];
Materials.SkyMat.push(new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, map: THREE.ImageUtils.loadTexture('gfx/skybox/snow_negative_x.jpg') }));
Materials.SkyMat.push(new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, map: THREE.ImageUtils.loadTexture('gfx/skybox/snow_positive_x.jpg') }));
Materials.SkyMat.push(new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, map: THREE.ImageUtils.loadTexture('gfx/skybox/snow_positive_y.jpg') }));
Materials.SkyMat.push(new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, map: THREE.ImageUtils.loadTexture('gfx/skybox/snow_negative_y.jpg') }));
Materials.SkyMat.push(new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, map: THREE.ImageUtils.loadTexture('gfx/skybox/snow_negative_z.jpg') }));
Materials.SkyMat.push(new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, map: THREE.ImageUtils.loadTexture('gfx/skybox/snow_positive_z.jpg') }));