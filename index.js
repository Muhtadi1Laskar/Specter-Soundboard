alert("Click on the button to play your favourite quote from Harvey Specter")
window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const buttons = document.querySelectorAll(".audio-list div");

    let arr = [];
    arr.length = 0;

    const tooglePlay = (src) => {
        src.map(r => {
            r.pause();
            r.currentTime = 0;
        });
    };

    buttons.forEach((clips, index) => {
        clips.addEventListener("click", function(){
            arr.push(sounds[index]);
            tooglePlay(arr);
           sounds[index].play(); 
        });
    });
});