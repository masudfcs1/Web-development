let cnt=0;
document.querySelector("#txtarea").addEventListener("keypress",function(event){
         cnt++;
    let txt=event.key;

    document.querySelector("p").innerHTML="Good Thinks Happen. "+ cnt;
});

