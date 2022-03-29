/*
var photo=["img/1.jpeg","img/2.jpg","img/4.jpg","img/5.jpg"]
var imgtag=document.querySelector("img")

let cnt=0;
function nextbtn(){
   cnt++;
   if(cnt>=photo.length){
       cnt=0;
       imgtag.src=photo[cnt];
   }
   else{
       imgtag.src=photo[cnt];
   }
    
}


function prvbtn(){
    cnt--;
    if(cnt>0){
        cnt=photo.length-1;
        imgtag.src=photo[cnt];
    }
    else{
      imgtag.src=photo[cnt];  
    }
      
}

*/



var photo=["img/1.jpeg","img/2.jpg","img/4.jpg","img/5.jpg",];
var imgtag=document.querySelector("img");

let cnt=0;
function PrevBtn(){
    cnt--;
    if(cnt<0){
        cnt=photo.length-1;
        imgtag.src=photo[cnt];
    }
    else {
        imgtag.src=photo[cnt];
    }

}

function nextbtn(){

   cnt++;
    if(cnt>=photo.length){
        cnt=0;
        imgtag.src=photo[cnt];
    }
    else {
        imgtag.src=photo[cnt];
    }

}