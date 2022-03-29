/*
function findhighestscroe(tt){
    var max=tt[0];
    for(var i=1;i<tt.length;i++){
        if(max<tt[i]){
            max=tt[i];
        }
    }
    return max;
}

var y=[1,4,5,6,7,72];
var maxt=findhighestscroe(y);
console.log(maxt);

*/


function highestscroe(tt){
    let max=tt[0];
    for(let i=1;i<tt.length;i++){
        if(max<tt[i]){
            max=tt[i];
        }
    }

    return max;
}

let a=[95,4,6,7,90];
let ans=highestscroe(a);
console.log(ans);
