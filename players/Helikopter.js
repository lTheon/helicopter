function Helikopter(){
    
    var heli = new THREE.Object3D();
    heli.position.set(0, 40, 0);
    heli.rotation.y -= Math.PI / 2;
    var grey = new THREE.MeshBasicMaterial({ color: 0x1F1F1F, side: THREE.DoubleSide});
    var red = new THREE.MeshBasicMaterial({ color: 0xFF0000, side: THREE.DoubleSide});
    var black = new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.DoubleSide});
    var yellow = new THREE.MeshBasicMaterial({ color: 0xFFFF00, side: THREE.DoubleSide});   
    //------------------------------MAIN------------------------------------
    var mainG = new THREE.CubeGeometry(30, 30, 30, 15, 5, 15);
    var main = new THREE.Mesh(mainG, red);
    heli.add(main);    
    //------------------------------MAIN ROTOR------------------------------------
    var mainRotorG = new THREE.CubeGeometry(80, 3, 10, 12, 12, 12);
    var mainRotor = new THREE.Mesh(mainRotorG, grey);
    mainRotor.position.set(0, 15, 0);
    heli.add(mainRotor);    
    //------------------------------TAIL------------------------------------
    var tailG = new THREE.CubeGeometry(10, 10, 50, 12, 2, 12);
    var tail = new THREE.Mesh(tailG, black);
    tail.position.set(0, 0, 40);
    heli.add(tail);    
    //------------------------------REAR------------------------------------
    var rearG = new THREE.CubeGeometry(17, 17, 17, 5, 5, 5);
    var rear = new THREE.Mesh(rearG, yellow);
    rear.position.set(0, 0, 60);
    heli.add(rear);   
    //------------------------------REAR ROTOR------------------------------------
    var rearRotorG = new THREE.CubeGeometry(1, 30, 3, 12, 12, 12);
    var rearRotor = new THREE.Mesh(rearRotorG, grey);
    rearRotor.position.set(10, 0, 60);
    heli.add(rearRotor);

    heli.position.set(0, 40, 0);
    this.getHeli = function(){
        return heli;
    }
    
    this.update = function(){
        mainRotor.rotation.y -= 0.3;
        rearRotor.rotation.x -= 0.45;
    }
}