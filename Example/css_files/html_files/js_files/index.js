mySounds = [
   {sound: new Audio("c1.mp3"), isQuiet: true},
   {sound: new Audio("c2.mp3"), isQuiet: false},
   {sound: new Audio("c3.mp3"), isQuiet: false},
   {sound: new Audio("c4.mp3"), isQuiet: false},
   {sound: new Audio("c5.mp3"), isQuiet: false},
   {sound: new Audio("c6.mp3"), isQuiet: false},
   {sound: new Audio("c7.mp3"), isQuiet: false},
   {sound: new Audio("c8.mp3"), isQuiet: false},
   {sound: new Audio("c9.mp3"), isQuiet: false},
   {sound: new Audio("c10.mp3"), isQuiet: false},
   {sound: new Audio("c11.mp3"), isQuiet: false},
   {sound: new Audio("c12.mp3"), isQuiet: false},
   {sound: new Audio("c13.mp3"), isQuiet: false},
   {sound: new Audio("c14.mp3"), isQuiet: false},
   {sound: new Audio("c15.mp3"), isQuiet: false},
   {sound: new Audio("c16.mp3"), isQuiet: false},
   {sound: new Audio("c17.mp3"), isQuiet: false},
   {sound: new Audio("c18.mp3"), isQuiet: false},
];
document.addEventListener("keydown",(e) =>{
   if (e.key === "a"){
      mysound[0].sound.currentTime = 0;
      mySounds[0].sound.play();
   }
   if(e.key==="s"){
      mySounds[1].sound.currentTime = 0;
      mySounds[1].sound.play();
   }
   if(e.key==="d"){
      mySounds[2].sound.currentTime = 0;
      mySounds[2].sound.play();
   }
   if(e.key==="f"){
      mySounds[3].sound.currentTime = 0;
      mySounds[3].sound.play();
   }
   if(e.key==="g"){
      mySounds[4].sound.currentTime = 0;
      mySounds[4].sound.play();
   }
   if(e.key==="h"){
      mySounds[5].sound.currentTime = 0;
      mySounds[5].sound.play();
   }
   if(e.key==="j"){
      mySounds[6].sound.currentTime = 0;
      mySounds[6].sound.play();
   }
   if(e.key==="k"){
      mySounds[7].sound.currentTime = 0;
      mySounds[7].sound.play();
   }
   if(e.key==="l"){
      mySounds[8].sound.currentTime = 0;
      mySounds[8].sound.play();
   }
   if(e.key==="z"){
      mySounds[9].sound.currentTime = 0;
      mySounds[9].sound.play();
   }
   if(e.key==="x"){
      mySounds[10].sound.currentTime = 0;
      mySounds[10].sound.play();
   }
   if (e.keycode === 16){
      for (let i = 0; i<mySounds.length; i++){
         mySounds[i].isQuiet = mySounds[i].isQuiet;
         if(mySounds[i].isQuiet){
            mySounds[i].sound.volume=0.3;
         } else {
            mySounds[i].sound.volume = 1;
         }
      }
   }

});