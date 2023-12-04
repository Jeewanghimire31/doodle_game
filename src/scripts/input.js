const keys = {
    A:false,
    D:false,
    W:false,
    S:false,
    SPACE:false,
};

window.onkeydown=e=>{
        switch(e.code){
        case 'KeyA':
        // case 'ArrowLeft':
            keys.A = true;
            break;
        case 'KeyW':
            keys.W = true;
            break;
        case 'KeyD':
        // case 'ArrowRight':
            keys.D = true;
            break;
        case 'Space':
            keys.SPACE = true;
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