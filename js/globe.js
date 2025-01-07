

document.addEventListener('DOMContentLoaded', () => {

// on globe model loaded

  const wiiglobe = document.querySelector('model-viewer');

  // Handles BGM based on users current time

    // SOUND EFFECTS
    
  
    
    // pointer grabs globe
    
    const moveglobearound = new Audio("/sound/forecast_grabglobe.wav"); 
    const spindaglobe = new Audio("/sound/forecast_spinglobe.wav"); 
    const moveglobeup = new Audio("/sound/forecast_move_up.wav"); 
    const moveglobedown = new Audio("/sound/forecast_move_down.wav"); 
    const moveglobeleft = new Audio("/sound/forecast_spinglobe.wav"); 
    const movegloberight = new Audio("/sound/forecast_spinglobe.wav"); 


    wiiglobe.addEventListener('pointerdown', () => {
                    moveglobearound.currentTime = 0; // Reset sound
                    moveglobearound.play();
                });
          
    // pointer grabs globe
    
    
    // pointer moves globe 
    
    
    wiiglobe.addEventListener('pointerup', () => {
                    spindaglobe.currentTime = 0; // Reset sound
                    spindaglobe.play();
                });
    
    
    // pointer moves globe 
    
    
    // up dpad (arrow up) to move globe up
    
    document.addEventListener('keydown', (event) => {
        if (event.key === "ArrowUp") {
               moveglobeup.currentTime = .1; 
               moveglobeup.play();
        }
    });
    
    // up dpad (arrow up) to move globe up
    
    // down dpad (arrow down) to move globe down
    
    document.addEventListener('keydown', (event) => {
        if (event.key === "ArrowDown") {
            moveglobedown.currentTime = .1; 
           moveglobedown.play();
          
        }
    });
    // down dpad (arrow down) to move globe down

        
    // left dpad (arrow left) to move globe left
    
    document.addEventListener('keydown', (event) => {
        if (event.key === "ArrowLeft") {
          moveglobeleft.currentTime = .1; 
          moveglobeleft.play();
          
        }
    });
    // left dpad (arrow left) to move globe left
    
        
    // right dpad (arrow right) to move globe right
    
    document.addEventListener('keydown', (event) => {
        if (event.key === "ArrowRight") {
          movegloberight.currentTime = .1; 
          movegloberight.play();
          
        }
    });
    // right dpad (arrow right) to move globe right
    

  
    // SOUND EFFECTS

 
  });

// on globe model loaded










// Handles loading the events for <model-viewer>'s slotted progress bar

const onProgress = (event) => {
    const progressBar = event.target.querySelector('.progress-bar');
    const updatingBar = event.target.querySelector('.update-bar');
    updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
    if (event.detail.totalProgress === 1) {
      progressBar.classList.add('hide');
      event.target.removeEventListener('progress', onProgress);
    } else {
      progressBar.classList.remove('hide');
    }
  };
  document.querySelector('model-viewer').addEventListener('progress', onProgress);

// Handles loading the events for <model-viewer>'s slotted progress bar
