let x = "sit"
console.log('Hello, World!')
function sum(a,b){
    return a+b;
}
console.log(sum(4,6));

let a=[1,2,3,4,5,6,7,8,9,10];
console.log("All the numbers: ");
console.log(a)
console.log("Even numbers Using FOR LOOP :-- ");
for(let i=0;i<a.length;i++){
    if(i%2!=0){
        console.log(a[i]);
    }
}

console.log("MAP :-- ");
a.map((item)=>{
if(item%2==0){
    console.log(item);
}
})

console.log("Prime numbers : ");
let i=2;
while(i<=10){
    let j=2;
    while(j<=i){
        if(i%j==0){
            break;
        }
        j++;
    }
    if(i==j){
        console.log(i);
    }
    i++;
}