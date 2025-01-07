

document.addEventListener('DOMContentLoaded', () => {

// on globe model loaded

  const wiiglobe = document.querySelector('model-viewer');

  // Handles BGM based on users current time

  // Function to determine which track to play
  function timeofdayBGMplayer() {
   
      const currentHour = new Date().getHours();
      const earthbgm = document.getElementById('BGMplayer');
      let selectedTrack;

      // Determine if it's day or night
      if (currentHour >= 5 && currentHour < 18) {
          // 50% chance to play day music or news
          selectedTrack = Math.random() < 0.5 ? '/music/forecastday.mp3' : '/music/news.mp3';
      } else {
          // 50% chance to play night music or news
          selectedTrack = Math.random() < 0.5 ? '/music/forecastnight.mp3' : '/music/news.mp3';
      }

      // Set the selected track to the audio element
      earthbgm.src = selectedTrack;
      earthbgm.play();

  }

  timeofdayBGMplayer();

// Handles BGM based on users current time


    // SOUND EFFECTS
    
  
    
    // pointer grabs globe
    
    const moveglobearound = new Audio("/sound/forecast_grabglobe.wav"); 
    
    wiiglobe.addEventListener('pointerdown', () => {
                    moveglobearound.currentTime = 0; // Reset sound
                    moveglobearound.play();
                });
          
    // pointer grabs globe
    
    
    // pointer moves globe 
    
    const spindaglobe = new Audio("/sound/forecast_spinglobe.wav"); 
    
    wiiglobe.addEventListener('pointerup', () => {
                    spindaglobe.currentTime = 0; // Reset sound
                    spindaglobe.play();
                });
    
    
    // pointer moves globe 
    
    
    // up dpad (arrow up) to move globe up
    const moveglobeup = new Audio("/sound/forecast_move_up.wav"); 
    
    document.addEventListener('keydown', (event) => {
        if (event.key === "ArrowUp") {
               moveglobeup.currentTime = .1; 
               moveglobeup.play();
        }
    });
    
    // up dpad (arrow up) to move globe up
    
    // down dpad (arrow down) to move globe down
    const moveglobedown = new Audio("/sound/forecast_move_down.wav"); 
    
    document.addEventListener('keydown', (event) => {
        if (event.key === "ArrowDown") {
            moveglobedown.currentTime = .1; 
           moveglobedown.play();
          
        }
    });
    // down dpad (arrow down) to move globe down

        
    // left dpad (arrow left) to move globe left
    const moveglobeleft = new Audio("/sound/forecast_spinglobe.wav"); 
    
    document.addEventListener('keydown', (event) => {
        if (event.key === "ArrowLeft") {
          moveglobeleft.currentTime = .1; 
          moveglobeleft.play();
          
        }
    });
    // left dpad (arrow left) to move globe left
    
        
    // right dpad (arrow right) to move globe right
    const movegloberight = new Audio("/sound/forecast_spinglobe.wav"); 
    
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








