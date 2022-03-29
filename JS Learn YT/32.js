
let cntw=0,cntr=0;
for(let i=0;i<5;i++){

let num=prompt("Enter the number 1-5 Guessing: ");
let rm=Math.floor(Math.random()*5)+1;


if(num==rm){
   console.log("Congrats! you Win."); cntr++; 
} 
else
{
   console.log("Try Again.");
   cntw++; 
}

}

document.write("You Won= "+cntr+"<br>");
document.write("Fail= "+cntw);



