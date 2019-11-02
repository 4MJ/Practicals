function string(parameter){
   let word=[]=parameter.split(" ");
   console.log(word);
   let right=[];
   let left=[];
   let pivot=word.pop();
   let newarr=[];
   for(let i=0; i<word.length; i++){
       if(word[i].length<=pivot.length){
           left.push(word[i]);
       }else{
           right.push(x[i]);
       }
   }
   let value=newarr[newarr.length-1];
   console.log(`${value} in capaital letter is ${value.toUpperCase()}`);
}
let context= new string("Web Development Tutorial is the best in the world of computer");
