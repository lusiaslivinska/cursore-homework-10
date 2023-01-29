const allowedKeys =['KeyA','KeyB','KeyQ','KeyW'];


function playSound(keyName){
    if (!allowedKeys.includes(keyName)) {
        return;
    }

    const audio = new Audio();
    audio.src = `Sounds/sound_${keyName}.mp3`;
    audio.play(); 
    
}

document.addEventListener("keyup", function(event){
   playSound(event.code);
});
