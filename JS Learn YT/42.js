


let len=document.querySelectorAll(".AllBtn").length;

for(let i=0;i<len;i++){

    document.querySelectorAll(".AllBtn")[i].addEventListener("mouseover", function(){
        let cnt=this.innerHTML;
        document.querySelector("h1").innerHTML="GOOD Thinks Happen "+cnt;
    })

}