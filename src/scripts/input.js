const keys = {
    A:false,
    D:false,
    W:false,
    S:false,
};

window.onkeydown=e=>{
    switch(e.code){
        case 'KeyA':
            keys.A = true;
            break;
        case 'KeyW':
            keys.W = true;
            break;
        case 'KeyD':
            keys.D = true;
            break;
        case 'KeyS':
            keys.S = true;
            break;
    }
}

window.onkeyup=e=>{

    switch(e.code){
        case 'KeyA':
            keys.A = false;
            break;
        case 'KeyW':
            keys.W = false;
            break;
        case 'KeyD':
            keys.D = false;
            break;
        case 'KeyS':
            keys.S = false;
            break;
            
    }

};