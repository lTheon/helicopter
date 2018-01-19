function CameraPosition() {
    /*
        0   UPPER FRONT FORWARD
        1   UPPER SELF TARGET
        2   FRONT SELF TARGET
        3   INSIDE FORWARD
    */
    var points= [];
    var camPos = [];
    for (var i = 0; i < 4; i++)
        camPos[i] = new Array();
    var point;
    //-------------UPPER FRONT FORWARD
    point = new THREE.Object3D();
    point.position.set(100, 50, 0);
    points.push(point);
    camPos[0].push(-200);
    camPos[0].push(100);
    camPos[0].push(0);
    //------------UPPER SELF TARGET
    point = new THREE.Object3D();
    point.position.set(0, 0, 0);
    points.push(point);
    camPos[1].push(0);
    camPos[1].push(400);
    camPos[1].push(0);
    //-------------FRONT SELF TARGET
    point = new THREE.Object3D();
    point.position.set(0, 40, 0);
    points.push(point);
    camPos[2].push(200);
    camPos[2].push(40);
    camPos[2].push(0);
    //--------------INSIDE FORWARD
    point = new THREE.Object3D();
    point.position.set(30, 45, 0);
    points.push(point);
    camPos[3].push(20);
    camPos[3].push(47);
    camPos[3].push(0);
    this.getPoints = function () { return points };
    this.getCamPositions = function () { return camPos };
}