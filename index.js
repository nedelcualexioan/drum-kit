var buttons = document.getElementsByTagName("button");

for(let i=0;i<buttons.length;i++){

    buttons[i].addEventListener("click", function (){

        var buttonText=this.textContent, audio;

        switch (buttonText) {
            case "w":
                audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                break;

            case "a":
                audio = new Audio("sounds/tom-2.mp3");
                audio.play();
                break;

            case "s":
                audio = new Audio("sounds/tom-3.mp3");
                audio.play();
                break;
            case "d":
                audio = new Audio("sounds/tom-4.mp3");
                audio.play();
                break;
            case "j":
                audio = new Audio("sounds/snare.mp3");
                audio.play();
                break;
            case "k":
                audio = new Audio("sounds/crash.mp3");
                audio.play();
                break;

            case "l":
                audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;
        
            default:
                break;
        }
        

})
}

document.addEventListener("keydown", function () {
    alert("ceva");
})



/*var audio = new Audio("sounds/tom-1.mp3");
audio.play();*/