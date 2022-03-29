
/*
function studentinfo(name,age,address,dpt){

    this.name=name;
    this.age=age;
    this.address=address;
    this.dpt=dpt;
}

let st1=new studentinfo("Masud",21,"Manikgonj","CSE");
let st2=new studentinfo("Tanzida",23,"savar","Labotory");

console.log(st1);
console.log(st2);

*/


function studentinfo(name,age,address,dpt){

    this.name=name;
    this.age=age;
    this.address=address;
    this.dpt=dpt;

    this.display=function(){
        console.log("Name of student:            "+name);
        console.log("Age of student :            "+age);
        console.log("Address of student :        "+address);
        console.log("Department of student :     "+dpt);
    }
}

let st1=new studentinfo("Masud",21,"Manikgonj","CSE");
let st2=new studentinfo("Tanzida",23,"savar","Labotory");


st1.display();
console.log("--------");
st2.display();

