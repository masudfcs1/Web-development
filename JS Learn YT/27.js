
/*
var n=[10,20,40,50,70];

for(var i=0;i<n.length;i++){
    console.log(n[i]);
}

var sum=0;
for(var i=0;i<n.length;i++){
    sum+=n[i];
}

console.log("Total Sum is: "+ sum);

*/


/*

var n=new Array(); 

for(var i=0;i<5;i++){
    //console.log(n[i]);
    n[i]=parseInt(prompt("Enter Aarry Number: "));
}

console.log("With Index Number");
for(var i=0;i<5;i++){
    console.log(n[i]);
}

var sum=0;
for(var i=0;i<n.length;i++){
    sum+=n[i];
}

console.log("Total Sum is: "+ sum);

*/

/*

const a=['Masud','Rana','SkyPeople','Clerk','Daffodil'];

console.log(a);

console.log("----------------------");

//⁡⁢⁢⁢𝗙𝗶𝗿𝘀𝘁 𝗲𝗹𝗲𝗺𝗲𝗻𝘁 𝗲𝗿𝗮𝘀𝗲⁡⁡⁡⁡
a.shift();
console.log(a);

a.shift();
console.log(a);



// First element insert
a.unshift("Bellemy");
console.log(a);

a.unshift("Rozen")
console.log(a);

//First index to last index erase, Print others
a.splice(1,2);
console.log(a);

console.log(a.splice(2,3));

*/

/*

*/




/*

const a=['Masud','Rana','SkyPeople','Clerk','Daffodil'];
//slice 
var s= a.slice(3);
console.log(s);
console.log("---------");
console.log(a);

*/


/*

const a=['Masud','Rana','SkyPeople','Clerk','Daffodil'];

var st=a.sort();
console.log("----Sort----");
console.log(st);

console.log("----Reverse----");
a.reverse();
console.log(st);

*/

// Sort different way
var t=[33,4,22,9,1];
t.sort(function(a,b){
    return a-b;
});

console.log(t);