for(let i=0;i<3;i++){
    document.querySelectorAll(".btnaudio")[i].addEventListener("click", function(){

        let txt=this.innerHTML;
        console.log(txt);
        display(txt)

    })
}

function display(txt){

    switch(txt){

        case "a":
        var audio = new Audio("audio/1.mp3");
        audio.play();
        break;

        case "b":
        var audio = new Audio("audio/2.mp3");
        audio.play();
        break;

        case "c":
        var audio = new Audio("audio/3.mp3");
        audio.play();
        break;
    }
}