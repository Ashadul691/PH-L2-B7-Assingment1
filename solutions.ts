

//Problem 1
function filterEvenNumbers (numbers:number[]):number[] {
    const EvenNumbers=numbers.filter((n)=>n%2===0);
    return EvenNumbers;
}


//problem 2

function reverseString (input:string):string{
     return input.split("").reverse().join("");}




//problem 3
 
type StringOrNumber= string | number;

function checkType (Input_type:StringOrNumber):string{
    return typeof Input_type==="string"?"String":"Number";
   }




//problem 4

const  getProperty =<T,X extends keyof T>(obj:T,key:X)=>{
    return obj[key];
}



//problem 5
 interface Book{
    title: string;
    author: string;
    publishedYear: number;
 };

 function toggleReadStatus (item:Book){
    return {
        ...item,
        isRead:true,
    }
 }


 
 //problem 6

 class Person {
    name:string;
    age:number;
    constructor(name:string ,age:number){
        this.name=name;
        this.age=age;
    };
 }

 class Student extends Person{
    grade:string;
    constructor(name:string ,age:number, grade:string){
        super(name,age);
        this.grade=grade;
    }
   getDetails():string {
    return`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
   }

 }


 //problem 7
 function getIntersection (item1:number[],item2:number[]):number[]{
    const UniqueItemValue= new Set(item1);
    return item2.filter((value)=>UniqueItemValue.has(value));
 } 